const { getDB } = require("../db");


exports.generateUpdateTableSQL = (tableName, data) => {
    const keys = Object.keys(data);
    const setClause = keys.map(field => `${field} = ?`).join(', ');

    return `UPDATE ${tableName}
      SET ${setClause}
      WHERE id = ?
    `;
}

exports.generateCreateTableSQL = (config) => {
    const fieldsSQL = Object.entries(config.fields)
        .map(([field, type]) => `${field} ${type}`)
        .join(', ');
    return `CREATE TABLE IF NOT EXISTS ${config.tableName} (${fieldsSQL});`;
}

exports.getDataByTable = async (tableName) => {
    const db = await getDB();
    return await db.all(`SELECT * FROM ${tableName}`);
}