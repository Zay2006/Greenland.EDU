export default {
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME || "world",
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "",
  dbHost: process.env.DB_HOST || "localhost",
  env: process.env.NODE_ENV || "development",
};
