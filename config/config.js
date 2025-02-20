export default {
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/greenland_edu',
    env: process.env.NODE_ENV || 'development'
}; 