const imp = require('dotenv').config({ path: './config/process.env' });

if (imp.error) {
    throw imp.error;
}

const env = process.env.NODE_ENV;

const dev = {
    app: {
        port: parseInt(process.env.DEV_APP_PORT) || 5000
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || 'uet-smta'
    }
};

const test = {
    app: {
        port: parseInt(process.env.TEST_APP_PORT) || 5000
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: parseInt(process.env.DEV_DB_PORT) || 27017,
        name: process.env.DEV_DB_NAME || 'uet-smta-test'
    }
};

const config = {
    dev,
    test
};

module.exports = config[env];
