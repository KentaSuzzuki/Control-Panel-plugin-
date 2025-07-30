// fieldSchema.ts
export interface FieldSchema {
    id: string;
    label: string;
    type: 'string' | 'number' | 'boolean';
    order: number; // ← this determines layout order
}
  