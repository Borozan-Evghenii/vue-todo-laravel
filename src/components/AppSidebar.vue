<template>
  <div class="sticky top-0 flex bg-[#F9F9F9] h-[100vh] p-11 flex-col gap-10">
    <RouterLink to="/category">
      <NavLink
        label="🏠 Home"
        :active="currentRoute.fullPath === '/category'"
      />
    </RouterLink>
    <NavLinkList
      title="Category"
      :data="data"
      @delete="handleDelete"
    />
    <ButtonAdd
      label="Create Category"
      ref="inputRef"
      @save="handleSave"
    >
      <template #icon-start>
        <AkPlus />
      </template>
      <template #icon-end>
        <div class="flex items-center gap-2">
          <CaMacCommand class="p-1 w-6 h-6 bg-[#EBEBEB] rounded-lg" />
          <TaHexagonLetterL class="p-1 w-6 h-6 bg-[#EBEBEB] rounded-lg" />
        </div>
      </template>
    </ButtonAdd>
    <!--  -->
  </div>
</template>

<script setup lang="ts">
import { TaHexagonLetterL } from '@kalimahapps/vue-icons'
import type { Category } from '@types'
import { CaMacCommand } from '@kalimahapps/vue-icons'
import { AkPlus } from '@kalimahapps/vue-icons'
import NavLinkList from './NavLinkList.vue'
import NavLink from './NavLink.vue'
import { useRouter } from 'vue-router'
import ButtonAdd from './ui/button/ButtonAdd.vue'
import { ref, toRef } from 'vue'
import { useMutation } from '@/api/hooks/useMutation'
import { postCategory } from '@/api/requests/postCategory'
import { deleteCategory } from '@/api/requests/deleteCategory'

const { currentRoute } = useRouter()

const inputRef = ref<{ inputRef: HTMLInputElement | null } | null>(null)

const props = defineProps<{ data: Category[] }>()
const emit = defineEmits(['categoryCreate', 'categoryDelete'])
const createCategory = useMutation(postCategory)
const delCategory = useMutation(deleteCategory)

const data = toRef(props, 'data')

const handleDelete = async (id: string) => {
  await delCategory.mutate({
    params: {
      categoryId: id
    }
  })
  emit('categoryDelete')
}

const handleSave = async (value: string) => {
  await createCategory.mutate({
    params: {
      category: {
        name: value
      }
    }
  })
  emit('categoryCreate')
}
</script>
