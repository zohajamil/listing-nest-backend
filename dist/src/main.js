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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.createNestServer = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const express_1 = __importDefault(require("express"));
const functions = __importStar(require("firebase-functions"));
const app_module_1 = require("./app/app.module");
const server = (0, express_1.default)();
const createNestServer = async (expressInstance) => {
    const adapter = new platform_express_1.ExpressAdapter(expressInstance);
    const app = await core_1.NestFactory.create(app_module_1.AppModule, adapter, {});
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    return app.init();
};
exports.createNestServer = createNestServer;
(0, exports.createNestServer)(server)
    .then(() => console.log('Nest Ready'))
    .catch((err) => console.error('Nest broken', err));
exports.api = functions
    .region('asia-south1')
    .https.onRequest(server);
//# sourceMappingURL=main.js.map