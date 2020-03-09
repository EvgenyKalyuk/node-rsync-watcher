import { createLogger, format, transports } from 'winston'; // eslint-disable-line

require('winston-daily-rotate-file'); // eslint-disable-line

const customFormat = format.printf(({ level, message, timestamp }) => {
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

export default createLogger({
    format: format.combine(
        format.colorize({ all: true }),
        format.timestamp(),
        customFormat
    ),
    transports: [
        new transports.Console({
            format: format.combine(
                format.timestamp(),
                format.colorize()
            )
        })
        // transport
    ]
});
