"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston"); // eslint-disable-line
require('winston-daily-rotate-file'); // eslint-disable-line
const customFormat = winston_1.format.printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
//
// // @ts-ignore
// const transport = new (transports.DailyRotateFile)({
//     filename: 'application-%DATE%.log',
//     datePattern: 'YYYY-MM-DD-HH',
//     zippedArchive: true,
//     maxSize: '20m',
//     maxFiles: '14d'
// });
exports.default = winston_1.createLogger({
    format: winston_1.format.combine(winston_1.format.colorize({ all: true }), winston_1.format.timestamp(), customFormat),
    transports: [
        new winston_1.transports.Console({
            format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.colorize())
        })
        // transport
    ]
});
//# sourceMappingURL=logger.js.map