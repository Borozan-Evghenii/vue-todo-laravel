<template>
  <button
    v-bind="$attrs"
    class="flex items-center justify-between px-4 h-[66px] hover:bg-[#EBEBEB] rounded-lg"
  >
    <div class="flex items-center gap-2">
      <span v-if="$slots['icon-start']">
        <slot name="icon-start"></slot>
      </span>
      <span class="h-full p-2">
        <p
          v-show="!edit"
          @click="handleLabelClick"
        >
          {{ label }}
        </p>
        <input
          v-show="edit"
          v-model="value"
          type="text"
          ref="inputRef"
          @blur="edit = false"
          @keydown.enter="handleSave"
          class="w-full outline-none border border-dashed border-[#2f2b43] rounded-lg h-full p-2 bg-transparent"
        />
      </span>
    </div>
    <span v-if="$slots['icon-end']">
      <slot name="icon-end"></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const edit = ref(false)
const inputRef = ref<HTMLInputElement | null>(null)
const value = ref('')

defineProps<{ label: string }>()
const emit = defineEmits(['save'])
defineExpose({
  inputRef
})

const handleSave = () => {
  edit.value = false
  emit('save', value.value)
  value.value = ''
}

const handleLabelClick = () => {
  edit.value = true
  setTimeout(() => inputRef.value?.focus(), 1)
}

const setupKeyDownListener = () => {
  window.addEventListener('keydown', handleKeyDown)
}

const cleanupKeyDownListener = () => {
  window.removeEventListener('keydown', handleKeyDown)
}

onMounted(setupKeyDownListener)
onUnmounted(cleanupKeyDownListener)

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.metaKey && event.key === 'l') {
    event.preventDefault()
    edit.value = true
    setTimeout(() => inputRef.value?.focus(), 1)
  }
}
</script>
