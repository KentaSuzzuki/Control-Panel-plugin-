import { defineStore } from "pinia";
import axios from "axios";
import { basicAPI } from ".";

interface Tab {
    id?: number;
    tabId: string
    label: string;
    icon: string;
    order: number
}

const tabs: Tab[] = [
    { tabId: "Features", label: 'Features', icon: "fa fa-star", order: 1 },
    { tabId: "Page", label: 'Page', icon: "fa fa-file-alt", order: 2 },
    { tabId: "Notifications", label: 'Notifications', icon: "fa fa-bell", order: 3 },
    { tabId: "Integrations", label: 'Integrations', icon: "fa fa-plug", order: 4 },
    { tabId: "Developer", label: 'Developer', icon: "fa fa-code", order: 5 },
]

export const useTabs = defineStore('tabs', {
    state: () => ({
        tabs: tabs,
    }),
    actions: {
        initTabs() {

        },
        async changeOrder(tabs: Tab[]) {
            await tabs.forEach((f, i) => (f.order = i));
            await axios.post(`${basicAPI}/tab`, { tabs: this.tabs });
        },
    }
})