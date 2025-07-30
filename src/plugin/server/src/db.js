const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

const path = require('path');
const dbURL = path.join(__dirname, '../../db/myDB.db');

async function getDB() {
    const DB = await open({
        filename: dbURL,
        driver: sqlite3.Database,
    });

    if (!DB) throw new Error('DB not connected');
    return DB;
}

module.exports = { getDB };