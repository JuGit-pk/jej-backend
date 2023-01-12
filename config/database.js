module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "drazdb"),
      user: env("DATABASE_USERNAME", "junaid"),
      password: env("DATABASE_PASSWORD", "123123"),
      // ssl: {
      //   rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      // },
    },
    useNullAsDefault: true,
    debug: false,
  },
});
