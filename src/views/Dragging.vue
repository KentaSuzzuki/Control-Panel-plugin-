<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <draggable
      v-model="fields"
      :list="fields"
      item-key="id"
      @end="onDragEnd"
    >
      <template #item="{ element }">
        <div class="field">
          <label>{{ element.label }}</label>
          <input
            type="{{element.type}}"
          />
        </div>
      </template>
    </draggable>
  </div>
</template>
  
<script setup lang="ts">
  import { defineOptions } from 'vue';
  defineOptions({ name: 'MyDragging' });

  import { ref } from 'vue';
  import draggable from 'vuedraggable';
  import type { FieldSchema } from './fieldSchema';
  
  // example: fields loaded from SQLite
  const fields = ref<FieldSchema[]>([
    { id: 'username', label: 'Username', type: 'string', order: 1 },
    { id: 'age', label: 'Age', type: 'number', order: 2 },
    { id: 'notifications', label: 'Enable Notifications', type: 'boolean', order: 3 }
  ]);
  
  // initial form values
  // const formData = ref<Record<string, any>>({
  //   username: '',
  //   age: 18,
  //   notifications: false
  // });
  
  // When drag ends, we update "order" and send to DB
  function onDragEnd() {
    fields.value.forEach((f, i) => (f.order = i));
    saveOrderToDb(fields.value);
  }
  
  function saveOrderToDb(updatedFields: FieldSchema[]) {
    // You'd persist this via SQLite logic.
    // Pseudocode:
    // db.run("UPDATE fields SET order = ? WHERE id = ?", field.order, field.id)
    console.log('Saving new order:', updatedFields.map(f => `${f.id}: ${f.order}`));
  }
</script>
  
<style scoped>
  .field {
    padding: 12px;
    border: 1px solid #ddd;
    margin-bottom: 8px;
    background: #fafafa;
    border-radius: 8px;
  }
</style>
