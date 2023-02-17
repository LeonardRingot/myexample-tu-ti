import app from './app';
import { connectToDb } from './connect';
import { logger } from './winston.logger'

app.listen(process.env.PORT, async () => {
  logger.info('Running Port with leonard ALLo.');
  await connectToDb();
})