<template>
  <div class="card p-fluid">
    <h1 class="font-bold mb-4 flex align-items-center"><i class="pi pi-globe mr-2"></i> Page Configuration</h1>
    <p class="text-gray-500 mb-4">Configure page behavior and access controls</p>
    <div class="field page-field">
      <label for="redirect-url">Exit Redirect URL</label>
      <InputText 
        id="redirect-url" 
        type="text" 
        v-model="form.redirectUrl" 
        @update:model-value="(value) => handleInputChange('redirectUrl', value || '')" 
      />
      <small>URL to redirect visitors after successful data capture</small>
    </div>
    <div class="field flex justify-content-between align-items-center page-country">
      <div>
        <label for="country-lock">Country Lock</label>
        <p class="text-sm text-gray-500">Restrict access to specific countries only</p>
      </div>
      <ToggleSwitch 
        v-model="form.countryLock" 
        @update:model-value="(value) => handleToggleChange('countryLock', value)"
        aria-label="Country Lock" 
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useStore } from '../composables/useStore';
import InputText from 'primevue/inputtext';
import ToggleSwitch from './ToggleSwitch.vue';

export default defineComponent({
  name: 'PageTab',
  components: {
    InputText,
    ToggleSwitch
  },
  setup() {
    const { settings, changeSetting } = useStore();

    const form = ref({ ...settings })
    let initialized = false;
    watch(
      () => settings,
      (newSettings) => {
        if (!initialized && Object.keys(newSettings).length > 0) {
          form.value = { ...newSettings };
          initialized = true;
        }
      },
      { immediate: true, deep: true }
    );

    // Function to handle toggle switch changes
    const handleToggleChange = (key: string, value: boolean) => {
      // @ts-ignore
      changeSetting(key, value);
    };

    // Function to handle input field changes
    const handleInputChange = (key: string, value: string) => {
      // @ts-ignore
      changeSetting(key, value);
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
@import "../style/pagetab.css";
</style> 