require('dotenv').load();

module.exports = {
  client: 'postgresql',
  connection: {
    user: process.env.DB_USER || 'orders',
    password: process.env.DB_PASSWORD || 'postgres',
    database: process.env.DB_NAME || 'postgres',
    host: process.env.DB_HOST || '127.0.0.1',
  },
  debug: true,
  searchPath: ['knex', 'public'],
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  }
};
