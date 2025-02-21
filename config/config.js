export default {
  port: process.env.PORT || 3000,
  dbName: process.env.DB_NAME || "Greenfield.edu",
  dbUser: process.env.DB_USER || "root",
  dbPassword: process.env.DB_PASSWORD || "0tNyIZGhtpb9i1x",
  dbHost: process.env.DB_HOST || "localhost",
  env: process.env.NODE_ENV || "development",
};
