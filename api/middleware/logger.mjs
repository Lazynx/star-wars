import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Получение __dirname в ES-модулях
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = (req, res, next) => {
  const log = `${new Date().toISOString()} ${req.method} ${req.url}\n`;
  fs.appendFileSync(path.join(__dirname, 'request.log'), log);
  next();
};

export default logger;
