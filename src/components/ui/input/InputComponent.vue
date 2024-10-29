<template>
  <div
    class="p-3 bg-white rounded-xl min-w-[400px] absolute z-[1000] border border-slate-300"
    ref="containerRef"
  >
    <input
      ref="inputRef"
      :value="modelValue"
      @input="handleInput"
      v-bind="$attrs"
      class="outline-none text-base w-full focus:border-slate-400 focus:border p-2 rounded-lg"
    />
  </div>
</template>

<script setup lang="ts">
import { defineExpose, useTemplateRef } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const inputRef = useTemplateRef('inputRef')
const containerRef = useTemplateRef('containerRef')

const handleInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

defineExpose({
  inputRef,
  containerRef
})
</script>
