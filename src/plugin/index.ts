import type { App } from 'vue'
import { createPluginStore } from './store';
import { useSettingsStore } from './store/settings'
import Dashboard from "./components/Dashboard.vue";
import FeaturesTab from "./components/FeaturesTab.vue";
import NotificationsTab from "./components/NotificationsTab.vue";
import PageTab from "./components/PageTab.vue";
import ToggleSwitch from "./components/ToggleSwitch.vue";

export interface ConfigDashboardOptions {
  schema: Record<string, any>;
}

export default {
  install(app: App, options: ConfigDashboardOptions) {
    if (!options.schema) {
      throw new Error("ConfigDashboard: schema is required");
    }
    
    app.use(createPluginStore())
    const settings = useSettingsStore();
    settings.initSettings();
    // Register global components
    app.component('ConfigDashboard', Dashboard);
    app.component('FeaturesTab', FeaturesTab);
    app.component('NotificationsTab', NotificationsTab);
    app.component('PageTab', PageTab);
    app.component('ToggleSwitch', ToggleSwitch);

    // Provide options to components
    app.provide('configDashboardOptions', {
      schema: options.schema,
    });
  }
};