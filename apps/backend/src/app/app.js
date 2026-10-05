import cors from 'cors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const frontendPath = path.resolve(__dirname, '../../../../apps/frontend/dist');

app.use(express.static(frontendPath));

app.get('/health', (_request, response) => {
  response.json({ status: 'ok', service: 'backend' });
});

app.get('*', (_request, response) => {
  response.sendFile(path.join(frontendPath, 'index.html'));
});

export default app;