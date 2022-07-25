"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.nameFreeFire = exports.kbbi = exports.listJadwalTV = exports.jadwalTVNow = exports.jadwalTV = exports.wikipedia = void 0;
const wikipedia_js_1 = __importDefault(require("./wikipedia.js"));
exports.wikipedia = wikipedia_js_1.default;
const jadwal_tv_js_1 = __importStar(require("./jadwal-tv.js"));
exports.jadwalTV = jadwal_tv_js_1.default;
Object.defineProperty(exports, "jadwalTVNow", { enumerable: true, get: function () { return jadwal_tv_js_1.jadwalTVNow; } });
Object.defineProperty(exports, "listJadwalTV", { enumerable: true, get: function () { return jadwal_tv_js_1.listJadwalTV; } });
const KBBI_js_1 = __importDefault(require("./KBBI.js"));
exports.kbbi = KBBI_js_1.default;
const idff_js_1 = __importDefault(require("./idff.js"));
exports.nameFreeFire = idff_js_1.default;
__exportStar(require("./minecraft.js"), exports);
__exportStar(require("./mediafire.js"), exports);
__exportStar(require("./BMKG.js"), exports);
__exportStar(require("./lyrics.js"), exports);
__exportStar(require("./minecraft.js"), exports);
__exportStar(require("./bioskop.js"), exports);
//# sourceMappingURL=index.js.map