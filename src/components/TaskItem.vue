<template>
  <div
    :class="{ 'bg-[#F9F9F9]': isCompleted }"
    class="py-4 px-5 rounded-lg flex items-center justify-between hover:bg-[#F9F9F9] gap-2"
  >
    <div class="flex items-center gap-2">
      <FlReOrderDotsVertical />
      <CheckBox
        :label="label"
        :checked="isCompleted"
        @change="handleChange"
      />
    </div>
    <div class="flex items-center gap-2">
      <CdEdit
        @click="$emit('edit', $event)"
        :class="[
          { 'bg-[#EBEBEB]': !isCompleted },
          { 'bg-white border border-slate-200': isCompleted }
        ]"
        class="p-1 w-6 h-6 rounded-md cursor-pointer hover:bg-slate-200"
      />
      <BsTrash3
        @click="$emit('delete', $event)"
        :class="[
          { 'bg-[#EBEBEB]': !isCompleted },
          { 'bg-white border border-slate-200': isCompleted }
        ]"
        class="p-1 w-6 h-6 rounded-md cursor-pointer hover:bg-slate-200"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { FlReOrderDotsVertical } from '@kalimahapps/vue-icons'
import CheckBox from './ui/checkBox/CheckBox.vue'
import { CdEdit, BsTrash3 } from '@kalimahapps/vue-icons'
import { ref } from 'vue'

interface TaskItemProps {
  completed: boolean
  label: string
}
const { completed, label } = defineProps<TaskItemProps>()

const isCompleted = ref(completed)
const emit = defineEmits<{
  (e: 'toggleStatus', cheched: boolean): boolean
  (e: 'edit', event: MouseEvent): void
  (e: 'delete', event: MouseEvent): void
}>()

const handleChange = (event: Event) => {
  isCompleted.value = (event.target as HTMLInputElement).checked
  emit('toggleStatus', (event.target as HTMLInputElement).checked)
}
</script>

<style scoped></style>
