<template>
  <label
    :for="id"
    class="inline-flex items-center gap-4"
  >
    <input
      v-bind="$attrs"
      :id="id"
      type="checkbox"
      class="peer hidden"
    />
    <div
      class="peer-disabled:bg-[#CCD2DB] cursor-pointer border border-[#CCD2DB] bg-transparent w-6 h-6 rounded-md peer-checked:bg-[#2F2B43] peer-checked:border-none flex items-center justify-center hover:bg-gray-200"
    >
      <AkCheck class="text-white text-base" />
    </div>
    <p class="peer-checked:line-through text-base font-medium peer-checked:text-slate-600">
      {{ props.label }}
    </p>
  </label>
</template>

<script setup lang="ts">
import { AkCheck } from '@kalimahapps/vue-icons'
import { useId } from 'vue'

interface Props {
  label?: string
}

const id = useId()

const props = defineProps<Props>()
</script>

<style scoped></style>
