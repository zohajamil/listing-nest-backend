"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = exports.admin = void 0;
const common_1 = require("@nestjs/common");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
exports.admin = firebase_admin_1.default;
common_1.Logger.log('Running code on Production');
firebase_admin_1.default.initializeApp();
const database = firebase_admin_1.default.firestore();
exports.database = database;
//# sourceMappingURL=firebase.config.js.map