<template>
  <div
    :class="{ 'bg-[#EBEBEB]': props.active }"
    class="p-4 flex items-center justify-between hover:bg-[#EBEBEB] cursor-pointer rounded-lg group"
  >
    <div class="flex items-center gap-2">
      <FlFilledReOrderDotsVertical class="group-hover:hidden" />
      <div
        @click="$emit('click')"
        class="p-1 w-6 h-6 hover:bg-slate-300 hidden rounded-md cursor-pointer group-hover:flex items-center justify-center group-hover:bg-white border"
      >
        <ClCloseMd />
      </div>
      <p class="text-md font-medium">{{ props.label }}</p>
    </div>
    <div
      v-if="count"
      :class="[{ 'bg-[#EBEBEB]': !active }, { 'bg-white border border-slate-200': active }]"
      class="p-1 w-6 h-6 rounded-md cursor-pointer flex items-center justify-center group-hover:bg-white border"
    >
      {{ count }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { FlFilledReOrderDotsVertical } from '@kalimahapps/vue-icons'
import { ClCloseMd } from '@kalimahapps/vue-icons'

defineEmits(['click'])

const props = defineProps<{
  active?: boolean
  label: string
  count?: number
}>()
</script>
