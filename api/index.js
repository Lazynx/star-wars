import express from 'express';
import got from 'got';
import logger from './middleware/logger.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(logger);

app.get('/api/:section', async (req, res) => {
  const { section } = req.params;
  const { search } = req.query;

  let url = `https://swapi.dev/api/${section}/`;
  if (search) {
    url += `?search=${search}`;
  }

  try {
    const response = await got(url);
    const data = JSON.parse(response.body).results;
    res.json(data);
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));
