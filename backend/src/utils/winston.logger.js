import winston from 'winston';

const optionLevels = {
  levels: {
    fatal: 0,
    error: 1,
    user: 2,
    success: 3,
    http: 4,
    warning: 5,
    info: 6
  },
  colors: {
    fatal: 'black',
    error: 'red',
    user: 'cyan',
    success: 'green',
    http: 'magenta',
    warning: 'yellow',
    info: 'blue'
  }
};

winston.addColors(optionLevels.colors);

export const logger = winston.createLogger({
  levels: optionLevels.levels,
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple(),
        winston.format.printf((info) => {
          const { level, message } = info;
          return ` - [${level}]: ${JSON.stringify(message, null, 2)}`;
        })
      )
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'eventsError.log',
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json()
      )
    }),
  ]
});