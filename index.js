const app = require('./src/app');
const pool = require('./src/pool');

pool
  .connect({
    host: 'postgres',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: 'postgres'
  })
  .then(() => {
    app().listen(3000, () => {
      console.log('Listening on port 3000');
    });
  })
  .catch((err) => console.error(err));
