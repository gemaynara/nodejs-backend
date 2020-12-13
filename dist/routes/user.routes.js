"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const users_controller_1 = require("../controllers/users.controller");
router.route('/')
    .get(users_controller_1.getUsers);
exports.default = router;
