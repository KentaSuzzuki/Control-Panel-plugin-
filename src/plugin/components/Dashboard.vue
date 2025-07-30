<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="dashboard p-4 setting-panel">
    <div class="dashboard-header flex justify-content-between align-items-center mb-4">
      <div style="display: flex; align-items: center;">
        <i class="pi pi-cog text-3xl mr-3" style="font-size: 36px; padding: 20px;"></i>
        <div>
          <h1 class="font-bold text-2xl m-0">Configuration Dashboard</h1>
          <p class="text-gray-500 m-0">Manage your application settings and preferences</p>
        </div>
      </div>
      <div class="actions">
        <Button
          v-if="unsavedChanges"
          label="Unsaved changes"
          class="p-button-text p-button-secondary"
        />
        <Button
          label="Reset"
          icon="pi pi-replay"
          class="p-button-outlined p-button-secondary ml-2"
          @click="resetChanges"
        />
        <Button
          label="Export PHP"
          icon="pi pi-download"
          class="p-button-outlined p-button-secondary ml-2"
          @click="exportConfig"
        />
        <Button
          label="Save Changes"
          icon="pi pi-save"
          class="p-button-save btn-save ml-2"
          @click="saveChanges"
          />
          <!--- :disabled="!unsavedChanges"--> 
      </div>
      <button
        class="go-out"
        style=""
        @click="goBack"
      >
        Out
      </button>
    </div>

    <div class="layout">
      <div class="wrapper">
          <draggable
            v-model="menuItems"
            :list="menuItems"
            item-key="id"
            @end="onDragEnd"
            class="menubar"
          >
            <template #item="{ element }">
              <div
                :class="{ 'active-bg': selectedTab === element.tabId }"
                @click="selectedTab = element.tabId"
                style="cursor: pointer;"
              >
                <i :class="element.icon"></i>
                {{ element.label }}
              </div>
            </template>
          </draggable>
      </div>
    </div>

    <div v-if="selectedTab == 'Features'"><FeaturesTab></FeaturesTab></div>
    <div v-if="selectedTab == 'Notifications'"><NotificationsTab></NotificationsTab></div>
    <div v-if="selectedTab == 'Page'"><PageTab></PageTab></div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '../composables/useStore';
import { ref } from 'vue'; 
import Button from 'primevue/button';
// import '@fortawesome/fontawesome-free/css/all.css';
import { useRouter } from 'vue-router';
import draggable from 'vuedraggable';

const { saveSettings, reSetSettings, tabs, changeOrder } = useStore();
const selectedTab = ref('Features');
const router = useRouter();
const menuItems = ref([...tabs]) 

// const tabIcons: Record<string, string> = {
//   'Features': 'pi pi-shield',
//   'Page': 'pi pi-globe',
//   'Notifications': 'pi pi-envelope',
//   'Integrations': 'pi pi-sync',
//   'Developer': 'pi pi-code',
// };

// const getTabIcon = (tab: { id: string; label: string; icon?: string }) => {
//   return tabIcons[tab.label] || 'pi pi-question-circle';
//   // Use the icon from the schema first, then fall back to the defaults
//   // const schemaIcon = store.options?.tabs?.find((t:any) => t.id === tab.id)?.icon;
//   // return schemaIcon || tabIcons[tab.label] || 'pi pi-question-circle';
// };

// const unsavedChanges = computed(() => store.unsavedChanges.value);
let unsavedChanges = false

const saveChanges = () => {
  saveSettings();
};

const resetChanges = () => {
  reSetSettings();
};

const exportConfig = () => {
  // store.exportConfig();
};

// const changeLayout = () => {
  
// };

const goBack = () => {
  router.push('/')
}

function onDragEnd() {
  
  changeOrder(menuItems.value);
}
</script>

<style>
@import '../style/dashboard.css';
</style>