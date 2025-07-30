import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from '@primevue/themes/aura';
import router from './router/index'
import ConfigDashboard, { ConfigDashboardOptions } from "./plugin/index";
import "./assets/main.css"
import 'primeicons/primeicons.css';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(PrimeVue, { ripple: true });
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});


// Define your configuration schema
const configSchema = {
    enableNotifications: {
        type: 'boolean',
        default: true,
        tab: 'notifications',
        label: 'Enable Notifications',
        description: 'Turn on/off system notifications'
    },
    notificationSound: {
        type: 'boolean',
        default: false,
        tab: 'notifications',
        label: 'Notification Sound',
        description: 'Play sound for notifications'
    },
    darkMode: {
        type: 'boolean',
        default: false,
        tab: 'features',
        label: 'Dark Mode',
        description: 'Enable dark theme'
    },
    autoSave: {
        type: 'boolean',
        default: true,
        tab: 'features',
        label: 'Auto Save',
        description: 'Automatically save changes'
    },
    theme: {
        type: 'string',
        default: 'default',
        tab: 'page',
        label: 'Theme',
        description: 'Application theme'
    }
};

const pluginOptions: ConfigDashboardOptions = {
    schema: configSchema,
};

app.use(ConfigDashboard, pluginOptions);

app.use(router)
app.mount("#app");
