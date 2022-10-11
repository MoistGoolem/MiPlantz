export const environment = {
    production: true,
    beta: process.env.BETA == 'true',
    dev: true,
    // mongo: {
    //     protocol: process.env.MONGO_PROTOCOL,
    //     user: process.env.MONGO_USER,
    //     pass: process.env.MONGO_PASSWORD,
    //     host: process.env.MONGO_HOST,
    //     packsDbName: process.env.MONGO_PACKS_DB_NAME,
    //     settings: process.env.MONGO_SETTINGS,
    //     version: '5.1.0', // MongoDB version to use in mongodb-memory-server
    // },
    jwtToken: process.env.JWT_TOKEN,
}
