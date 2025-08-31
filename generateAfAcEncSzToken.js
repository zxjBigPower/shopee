function getCanvasFingerprint() {
    // 标准canvas指纹算法
    try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = "14px 'Arial'";
        ctx.fillStyle = "#f60";
        ctx.fillRect(0, 0, 100, 40);
        ctx.fillStyle = "#069";
        ctx.fillText("fingerprint", 2, 18);
        ctx.strokeStyle = "rgba(102, 204, 0, 0.7)";
        ctx.strokeText("fingerprint", 4, 24);
        return canvas.toDataURL();
    } catch (e) {
        return "";
    }
}

function getWebGLFingerprint() {
    // 标准webgl指纹算法
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (gl) {
            const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
            if (debugInfo) {
                return gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL) + "|" +
                    gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            }
        }
        return "";
    } catch (e) {
        return "";
    }
}

function getAudioFingerprint() {
    // Shopee风控常用音频指纹算法
    try {
        const context = window.OfflineAudioContext
            ? new OfflineAudioContext(1, 44100, 44100)
            : new (window.webkitOfflineAudioContext || window.AudioContext)(1, 44100, 44100);

        // 生成一段音频
        const oscillator = context.createOscillator();
        oscillator.type = 'triangle';
        oscillator.frequency.value = 10000;

        const compressor = context.createDynamicsCompressor();
        compressor.threshold.value = -50;
        compressor.knee.value = 40;
        compressor.ratio.value = 12;
        compressor.attack.value = 0;
        compressor.release.value = 0.25;

        oscillator.connect(compressor);
        compressor.connect(context.destination);

        oscillator.start(0);
        context.startRendering();

        return new Promise(resolve => {
            context.oncomplete = function (event) {
                const fingerprint = event.renderedBuffer.getChannelData(0)
                    .slice(4500, 5000)
                    .reduce((acc, val) => acc + Math.abs(val), 0);
                resolve(fingerprint.toString());
            };
            // 超时fallback
            setTimeout(() => resolve("audio_timeout"), 500);
        });
    } catch (e) {
        return Promise.resolve("audio_error");
    }
}

function collectFingerprint() {
    return {
        ua: navigator.userAgent,
        language: navigator.language,
        platform: navigator.platform,
        screen: {
            width: screen.width,
            height: screen.height
        },
        canvas: getCanvasFingerprint(),
        webgl: getWebGLFingerprint(),
        audio: getAudioFingerprint(), // 音频指纹
        random: Math.random().toString(36).slice(2),
        timestamp: Date.now(),
    }
}

const moves = [];
document.addEventListener('mousemove', ev => moves.push(['move', ev.clientX, ev.clientY, Date.now()]));
document.addEventListener('click', ev => moves.push(['click', ev.clientX, ev.clientY, Date.now()]));
document.addEventListener('keydown', ev => moves.push(['key', ev.key, Date.now()]));
function collectBehavior() {
    return moves.slice(-50);
}

class ShopeeRC4 {
    constructor() {
        // S-box初始化（从源码实际数组补全，含256项）
        this.state = [41, 82, 74, 163, 214, 66, 204, 104, 1, 87, 212, 142, 77, 75, 15, 37, 80, 210, 235, 160, 247, 40, 232, 3, 198, 124, 219, 157, 20, 166, 192, 11, 229, 94, 236, 78, 88, 114, 253, 122, 61, 125, 138, 209, 105, 251, 139, 147, 165, 123, 244, 38, 26, 65, 100, 115, 151, 71, 218, 137, 140, 191, 85, 46, 190, 42, 81, 179, 22, 211, 56, 51, 92, 167, 93, 245, 184, 112, 116, 32, 144, 145, 111, 95, 33, 132, 84, 103, 199, 6, 195, 24, 18, 68, 158, 196, 19, 222, 48, 129, 16, 155, 53, 59, 186, 220, 153, 148, 187, 161, 130, 213, 72, 248, 73, 227, 45, 216, 205, 29, 101, 230, 5, 79, 23, 76, 91, 21, 156, 208, 223, 149, 243, 28, 201, 181, 9, 60, 13, 136, 135, 169, 90, 62, 241, 108, 159, 34, 168, 164, 98, 174, 133, 215, 221, 154, 49, 7, 143, 55, 128, 225, 240, 183, 30, 12, 31, 126, 234, 200, 110, 182, 162, 70, 239, 206, 43, 170, 89, 120, 86, 58, 180, 25, 172, 173, 252, 121, 10, 83, 47, 217, 141, 231, 178, 197, 39, 113, 57, 226, 233, 238, 175, 188, 14, 69, 224, 67, 117, 246, 36, 99, 102, 27, 189, 44, 50, 17, 203, 2, 54, 35, 63, 177, 194, 134, 176, 249, 150, 118, 0, 107, 146, 171, 228, 96, 202, 64, 131, 4, 207, 254, 185, 242, 255, 250, 193, 106, 237, 8, 152, 52, 127, 97, 119, 109];

        this.i = 0;
        this.j = 0;
        // SBOX_ITEMS和arrayJOps用于PRGA自定义分支
        this.SBOX_ITEMS = [];
        this.arrayJOps = [];
        for (let n = 0; n < 256; n++) {
            this.SBOX_ITEMS.push(() => this.state[n]);
            this.arrayJOps.push((e, r, i) => {
                // PRGA分支，源码实际逻辑如下：
                // m = [this.state[e], this.state[n]]
                // 交换
                const m = [this.state[e], this.state[n]];
                this.state[n] = m[0];
                this.state[e] = m[1];
                // 自定义分支
                let temp = ((this.state[n] ^ r[e % i]) + (this.state[e] ^ r[n % i])) % 256;
                return this.SBOX_ITEMS[temp]() ^ r[temp % i];
            });
        }
    }

    prgaCase(t, e, n, r) {
        // PRGA主循环：返回新j和计算值
        e = (e + (this.SBOX_ITEMS[t]() ^ n[t % r])) % 256;
        let v = this.arrayJOps[e](t, n, r);
        return [e, v];
    }

    encrypt(dataUint8, keyUint8) {
        let result = new Uint8Array(dataUint8.length);
        let keyLen = keyUint8.length;
        for (let i = 0; i < dataUint8.length; i++) {
            this.i = (this.i + 1) % 256;
            let [j, v] = this.prgaCase(this.i, this.j, keyUint8, keyLen);
            this.j = j;
            result[i] = v ^ dataUint8[i];
        }
        return result;
    }
}

function encryptAES(data, key) {
    const k = CryptoJS.enc.Utf8.parse(key);
    const d = CryptoJS.enc.Utf8.parse(data);
    return CryptoJS.AES.encrypt(d, k, {
        iv: k,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
}
// 1. 指纹序列化
function serializeFingerprint(fingerprintObj) {
    // 以 Shopee 风控常见方式，将对象转为 JSON 字符串后 utf-8 编码
    // 实际风控 SDK可能还会转 ArrayBuffer 或 Uint8Array
    const json = JSON.stringify(fingerprintObj);
    // 转为 Uint8Array (utf-8)
    if (window.TextEncoder) {
        return new Uint8Array(new TextEncoder().encode(json));
    } else {
        // fallback for old browsers
        return new Uint8Array(
            unescape(encodeURIComponent(json))
                .split('')
                .map(char => char.charCodeAt(0))
        );
    }
}

// 2. 行为序列化
function serializeBehavior(behaviorArr) {
    // 行为记录一般是二维数组或对象数组
    // Shopee 真实 SDK会自定义结构体转 ArrayBuffer，本例用简单序列化
    const json = JSON.stringify(behaviorArr);
    if (window.TextEncoder) {
        return new Uint8Array(new TextEncoder().encode(json));
    } else {
        return new Uint8Array(
            unescape(encodeURIComponent(json))
                .split('')
                .map(char => char.charCodeAt(0))
        );
    }
}

// 3. Shopee风控密钥获取
function getShopeeKey() {
    // 真实风控SDK密钥有三种来源：
    // 1. 固定硬编码（如 "f9ffc83459897a13dd14c537e84b1753"）
    // 2. 前端js代码中变量，如 window.__SZ_KEY 或某个全局对象
    // 3. 动态接口返回（极少，风控后端分发）
    // 你可以直接用 Shopee风控源码里的密钥字符串（见 sandBox.js 代码中的 V.live/test/uat/staging/stable 字段）

    // 推荐做法：直接用 live 环境的密钥（实际逆向所得）
    // 其它环境（test、uat、staging）可用其它密钥
    return "f9ffc83459897a13dd14c537e84b1753"; // Shopee live环境密钥
    // 其它环境举例:
    // test:    "90a081b48a9c87345189bda87a989d23"
    // uat:     "5a733eaa4e1df48aa36fd9316f093107"
    // staging: "d9dd212362d63e8ddb085bb5bce5259f"
    // stable:  "dc6fe70845cb784460ead6c7fd76bb91"
}
function getSessionId() {
    return Math.random().toString(36).slice(2) + Date.now();
}
function generateAfAcEncSzToken() {
    // 1. 采集指纹和行为
    const fingerprint = collectFingerprint();
    const behavior = collectBehavior();

    // 2. 序列化为 ArrayBuffer
    const fpBuffer = serializeFingerprint(fingerprint); // 序列化为Uint8Array
    const bhBuffer = serializeBehavior(behavior);       // 序列化为Uint8Array

    // 3. 加密（RC4变体或AES）
    const key = getShopeeKey(); // 固定密钥或通过逆向获得
    const rc4 = new ShopeeRC4();
    const encryptedFp = rc4.encrypt(fpBuffer, key);
    const encryptedBh = rc4.encrypt(bhBuffer, key);

    // 4. base64编码
    const token = [
        btoa(String.fromCharCode.apply(null, encryptedFp)),
        btoa(String.fromCharCode.apply(null, encryptedBh)),
        getSessionId(), // 随机串
        "08", // 密钥版本号
        "3"   // 环境类型
    ].join('|');
    console.log(token.split('|'));
    return token;
}
console.log(generateAfAcEncSzToken());
