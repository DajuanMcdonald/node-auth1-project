// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './dev/user.db3'
    },

    migrations: {
      directory: './dev/migrations'
    },

    seeds: {
      directory: './seeds'
    }
  },

  

};
