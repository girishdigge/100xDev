"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
let num = 1;
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.games.push({
        id: Math.random().toString(),
        whitePlayerName: 'Girish Digge' + num,
        blackPlayerName: 'Andria Botaz' + num,
        moves: [num.toString()],
    });
    num++;
}, 2000);
