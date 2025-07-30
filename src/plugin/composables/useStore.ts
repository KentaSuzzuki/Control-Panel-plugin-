import { useSettingsStore } from '../store/settings';
import { useTabs } from '../store/tabs';

export const useStore = () => {
    const settings = useSettingsStore()
    const tabs = useTabs();

    return {
        settings: settings.$state.settings,
        changeSetting: settings.changeSetting,
        reSetSettings: settings.reSetSettings,
        saveSettings: settings.saveSettings,

        tabs: tabs.$state.tabs,
        changeOrder: tabs.changeOrder,
    }
}
