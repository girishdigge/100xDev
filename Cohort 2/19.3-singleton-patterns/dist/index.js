"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
let num = 1;
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.GameManager.getInstance().addGame(num.toString());
    store_1.GameManager.getInstance().addMove('1', 'b5');
    num++;
}, 3000);
