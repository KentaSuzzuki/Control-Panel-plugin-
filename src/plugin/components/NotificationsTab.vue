<template>
  <div class="p-fluid">
    <div class="card">
      <h1 class="font-bold mb-4 flex align-items-center"><i class="pi pi-envelope mr-2"></i> Email Notifications</h1>
      <p class="text-gray-500 mb-4">Configure email notification settings</p>
      <div class="field flex justify-content-between align-items-center notification-email">
        <div>
          <label for="email-results">Email Results</label>
          <p class="text-sm text-gray-500">Send captured data to email address</p>
        </div>
        <ToggleSwitch 
          v-model="form.emailResults" 
          @update:model-value="(value) => handleToggleChange('emailResults', value)"
          aria-label="Email Results" 
        />
      </div>
      <div class="field notification-address">
        <label for="email-address">Email Address</label>
        <InputText 
          id="email-address" 
          type="text" 
          v-model="form.email" 
          @update:model-value="(value) => handleInputChange('email', value)"
          placeholder="email@mail.com" 
        />
        <small>Email address to receive notifications</small>
      </div>
    </div>

    <div class="card mt-4">
      <h5 class="font-bold mb-4 flex align-items-center"><i class="pi pi-send mr-2"></i> Telegram Notifications</h5>
      <p class="text-gray-500 mb-4">Configure Telegram bot notifications</p>
      <div class="field flex justify-content-between align-items-center card-content">
        <div>
          <label for="telegram-results">Telegram Results</label>
          <p class="text-sm text-gray-500">Send captured data to Telegram channel</p>
        </div>
        <ToggleSwitch 
          v-model="form.telegramResults" 
          @update:model-value="(value) => handleToggleChange('telegramResults', value)"
          aria-label="Telegram Results" 
        />
      </div>
      <div class="field flex-col" >
        <label for="telegram-api-key">Telegram Bot API Key</label>
        <InputText 
          id="telegram-api-key" 
          type="text" 
          v-model="form.telegramBotAPI" 
          @update:model-value="(value) => handleInputChange('telegramBotAPI', value)"
          placeholder="Your bot API key (without 'bot' prefix)" 
        />
      </div>
       <div class="field flex-col">
        <label for="telegram-chat-id">Telegram Chat ID</label>
        <InputText 
          id="telegram-chat-id" 
          type="text" 
          v-model="form.telegramChatId" 
          @update:model-value="(value) => handleInputChange('telegramChatId', value)"
          placeholder="Your chat/group ID" 
        />
        <small>Use Rose bot with "/id" command to get your chat ID</small>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from '../composables/useStore';
import InputText from 'primevue/inputtext';
import ToggleSwitch from './ToggleSwitch.vue';

export default defineComponent({
  name: 'NotificationsTab',
  components: {
    InputText,
    ToggleSwitch
  },
  setup() {
    const { settings, changeSetting } = useStore();
    const form = ref({ ...settings });

    // Function to handle toggle switch changes
    const handleToggleChange = (key: string, value: boolean) => {
      (form as any)[key] = value;
      // @ts-ignore
      changeSetting(key, value)
    };

    // Function to handle input field changes
    const handleInputChange = (key: string, value: any) => {
      // Update local form data
      (form as any)[key] = value;
      // @ts-ignore
      changeSetting(key, value)
    };

    return { 
      form,
      handleToggleChange,
      handleInputChange
    };
  }
});
</script>

<style scoped>
@import "../style/notification.css";
</style> 