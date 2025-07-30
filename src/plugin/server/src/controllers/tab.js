const { getDB } = require("../db");
const { initTabs } = require("../config")
const { getDataByTable } = require("./common")

exports.initializeTabs = async () => {
    const db = await getDB();

    const stmt = await db.prepare(`INSERT INTO tabs (tabId, label, icon, order) VALUES (?, ?, ?, ?)`)
    for (const tab of initTabs) {
        await stmt.run([...Object.values(tab)]);
    }

    return await getDataByTable("tabs");
}

exports.update = async (req, res) => {
    try {
        const { tabs } = req.body;
        console.log('tabs ==>?', tabs)
        const db = await getDB();
        const stmt = await db.prepare(`UPDATE tabs SET order = ? WHERE tabId = ?`);

        for (const tab of tabs) {
            await stmt.run(tab.order, tab.tabId);
        }

    } catch (error) {
        console.log(error.message)
    }
}

exports.getTabs = async (req, res) => {
    res.json(await getDataByTable("tabs"));
}