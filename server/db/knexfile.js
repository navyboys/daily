module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'daily',
    },
    migrations: {
      directory: __dirname + '/migrations'
    },
    seeds: {
      directory: __dirname + '/seeds'
    }
  },
  staging: {
    client: 'postgresql',
    connection: {
      database: 'daily',
    }
  },
  production: {
    client: 'postgresql',
    connection: {
      database: 'daily',
    }
  }
};
