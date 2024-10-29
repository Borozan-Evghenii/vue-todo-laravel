<template>
  <div
    v-bind="$attrs"
    class="h-[66px] px-5 bg-[#F9F9F9] text-[#1F1C34] flex items-center gap-2 rounded-xl border border-dashed w-full"
  >
    <AkPlus />
    <p
      v-show="!isEditable"
      @click="isEditable = true"
      class="align-middle"
    >
      {{ label }}
    </p>
    <input
      v-show="isEditable"
      v-model="value"
      @blur="isEditable = false"
      ref="inputRef"
      @keydown.enter="
        () => {
          isEditable = false
          $emit('create', value)
          value = ''
        }
      "
      class="outline-none border border-dashed border-[#2f2b43] rounded-lg h-3/4 w-1/2 px-5 bg-transparent"
    />
  </div>
</template>

<script setup lang="ts">
import { AkPlus } from '@kalimahapps/vue-icons'
import { ref, watch } from 'vue'

const value = ref('')
const inputRef = ref<HTMLInputElement | null>(null)
const isEditable = ref(false)

watch(isEditable, () => {
  if (isEditable.value === true) {
    setTimeout(() => inputRef.value?.focus(), 0)
  }
})

defineProps<{ label: string }>()
defineEmits<{ (e: 'create', value: string): void }>()
</script>

<style scoped></style>
