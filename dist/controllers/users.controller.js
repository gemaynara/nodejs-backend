"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUsers = exports.getUsers = void 0;
const database_1 = require("../database");
function getUsers(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield database_1.connect();
        const data = yield connection.query('SELECT * FROM users');
        return response.json(data[0]);
    });
}
exports.getUsers = getUsers;
function createUsers(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const newUser = request.body;
        return response.json({ message: 'User created' });
    });
}
exports.createUsers = createUsers;
