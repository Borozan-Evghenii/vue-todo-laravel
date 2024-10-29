<template>
  <h2 class="text-2xl font-medium">{{ props.title }}</h2>
  <div class="flex flex-col gap-2 overflow-y-scroll py-2 h-full min-h-[400px]">
    <RouterLink
      v-for="category in props.data"
      :key="category.id"
      :to="'/category/' + category.id"
    >
      <NavLink
        :label="category.name"
        :active="currentRoute.params['categoryId'] === category.id.toString()"
        :count="category.tasks_count"
        @click="$emit('delete', category.id)"
      />
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'
import type { Category } from '@types'
import { useRouter } from 'vue-router'
defineEmits(['delete'])
const props = defineProps<{ data: Category[]; title: string }>()

const { currentRoute } = useRouter()
</script>

<style scoped></style>
