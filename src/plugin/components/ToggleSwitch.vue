<template>
  <button
    class="toggle-switch"
    :class="{ 'is-on': modelValue }"
    @click="toggle"
    :aria-pressed="modelValue"
    :aria-label="ariaLabel"
    type="button"
  >
    <span class="toggle-knob"></span>
  </button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: Boolean,
  ariaLabel: String
})
const emit = defineEmits(['update:modelValue']);

function toggle() {
  let value;
  if (props.modelValue) value = 0;
  else value = 1;
  emit('update:modelValue', value);
}
</script>

<style scoped>
.toggle-switch {
  width: 40px;
  height: 20px;
  border-radius: 999px;
  background: #111;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background 0.2s;
  outline: none;
  display: inline-flex;
  align-items: center;
  padding: 0;
}
.toggle-switch.is-on {
  background: #111;
}
.toggle-knob {
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  left: 1px;
  top: 1px;
  transition: left 0.2s;
}
.toggle-switch.is-on .toggle-knob {
  left: 21px;
}
</style> 