import fs from 'fs';
import path from 'path';

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;

  // Логирование в консоль
  console.log(log);

  next();
};

export default logger;
