const initSettings = require("../config");
const { getDB } = require("../db");
const { configSchema } = require("../config");
const { generateCreateTableSQL, generateUpdateTableSQL, getDataByTable } = require("./common");

const initDatabase = async () => {
    const db = await getDB();
    let arr = Object.values(configSchema)
    for (const config of arr) {
        const sql = await generateCreateTableSQL(config);
        await db.run(sql);
    }

    const row = await db.all('SELECT * FROM settings');
    if (row.length == 0) {
        const insertKeys = Object.keys(initSettings).join(', ');
        const insertPlaceholders = Object.keys(initSettings).map(() => '?').join(', ');
        const insertValues = Object.values(initSettings);
        await db.run(`INSERT INTO settings (${insertKeys}) VALUES (${insertPlaceholders})`, insertValues);
    }
}



exports.getSettings = async (req, res) => {
    const result = await getDataByTable('settings');
    console.log(result)
    res.json(result.length > 0 ? result[0] : [])
}

exports.saveSettings = async (req, res) => {
    try {
        const db = await getDB();
        await initDatabase()
        const { settings, dbId } = req.body;
        if (settings.id) delete settings.id;

        const keys = Object.keys(settings);
        const values = keys.map(k => settings[k]);
        values.push(dbId);
        let query = generateUpdateTableSQL("settings", settings)

        const stmt = await db.prepare(query);
        let result = await stmt.run(values);

        res.json(result)
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

exports.initSettings = async (req, res) => {
    await initDatabase();
    res.json({});
}

exports.resetSettings = async (req, res) => {
    try {
        const db = await getDB();
        const { dbId } = req.body

        const keys = Object.keys(initSettings);
        const values = keys.map(k => initSettings[k]);
        values.push(dbId);
        let query = generateUpdateTableSQL("settings", initSettings);

        const stmt = await db.prepare(query);
        await stmt.run(values);

        let result = await getDataByTable('settings');
        res.json(result);
    } catch (error) {
        console.log(error.message)
    }
}