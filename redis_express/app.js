import 'dotenv/config'

import express from 'express';

import sequelize from './db.js';
import router from './routers/index.js';
import errorHandler from './middleware/ErrorHandlingMiddleware.js';

const PORT = process.env.PORT || 2000;

let app = express();

app.use(errorHandler);

app.use('/api', router);
app.use('/api', router);

const start = async () => {
  try {
      await sequelize.authenticate();
      await sequelize.sync();
      app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
      console.log(e)
  }
}


start();