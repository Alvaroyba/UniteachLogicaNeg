require('dotenv').config();

const DATA_ACCESS_API = process.env.DATA_ACCESS_API || 'http://localhost:9000';

module.exports = { DATA_ACCESS_API };
