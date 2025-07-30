<template>
  <router-view />
</template>

<script setup lang="ts">

</script>

<style>
body {
  margin: 0;
  background-color: #f4f4f9;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}

#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.dashboard-tabs div[data-v-58b7974e] {
  background-color: transparent !important;
}

/* Global CSS variables for theming */
:root {
  --config-primary-color: #0066cc;
  --config-secondary-color: #64748b;
  --config-border-radius: 8px;
  --config-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Utility classes */
.text-gray-500 {
  color: #6b7280;
}

.text-gray-600 {
  color: #4b5563;
}

.bg-gray-100 {
  background-color: #f3f4f6;
}

.border-round {
  border-radius: 10px !important;
}

.shadow-1 {
  box-shadow: var(--config-shadow);
}

.block {
  display: block;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mt-4 {
  margin-top: 1rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.p-4 {
  padding: 1rem;
}

.w-10rem {
  width: 10rem;
}

.debug-info {
  margin-top: 30px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.debug-info button {
  margin: 5px;
  padding: 8px 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.debug-info button:hover {
  background: #0056b3;
}

.debug-output {
  margin-top: 15px;
  padding: 15px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow-x: auto;
}

.debug-output pre {
  margin: 0;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
