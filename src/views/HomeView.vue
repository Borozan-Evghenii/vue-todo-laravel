<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import { RouterView } from 'vue-router'

import dayjs from 'dayjs'
import { useQuery } from '@/api/hooks/useQuery'
import { getCategories } from '@/api/requests/getCategories'
import { toRef } from 'vue'
const date = dayjs(Date.now())

const request = useQuery(() => getCategories({}))

const categories = toRef(request, 'response')
</script>

<template>
  <main class="grid grid-cols-[minmax(300px,_350px)_2fr] relative">
    <AppSidebar
      :data="categories?.results"
      @category-delete="request.refetch"
      @category-create="request.refetch"
    />
    <div class="h-full p-12">
      <h2 class="text-3xl font-bold mb-3">Good Evening, Camero 🤩</h2>
      <h4 class="text-md font-medium text-[#525252]">
        It's {{ date.format('dddd') }} ,{{ date.format('DD MMMM YYYY') }}
      </h4>
      <RouterView />
    </div>
  </main>
</template>
