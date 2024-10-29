<template>
  <div class="flex flex-col gap-3 mt-6">
    <ButtonAddTask
      label="New Task"
      @create="handleCreate"
    />

    <TaskItem
      v-for="(task, index) in response?.results"
      :key="task.id"
      :completed="Boolean(task.completed)"
      :label="task.title"
      @delete="handleDelete($event, task.id.toString())"
      @edit="editItem(index, $event, task.id.toString())"
      @toggle-status="arg => handleToggleStatus(arg, task.id.toString())"
    />

    <InputComponent
      v-show="editing"
      v-model="newValue"
      @keydown.enter="saveEdit"
      @blur="editing = false"
      ref="editInput"
    />
  </div>
</template>

<script setup lang="ts">
import { getTasks } from '@/api/requests/getTasks'
import { useQuery } from '@/api/hooks/useQuery'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ButtonAddTask from '@/components/ui/button/ButtonAddTask.vue'
import TaskItem from '@/components/TaskItem.vue'
import { useMutation } from '@/api/hooks/useMutation'
import { putTasks } from '@/api/requests/putTask'
import { deleteTask } from '@/api/requests/deleteTask'
import InputComponent from '@/components/ui/input/InputComponent.vue'
import { postTask } from '@/api/requests/postTask'

const route = useRoute()
const editing = ref(false)
const editableId = ref('')
const newValue = ref('' || undefined)
const editInput = ref<{ inputRef: HTMLInputElement | null } | null>(null)

const { response, refetch } = useQuery(() =>
  getTasks({ params: { categoryId: route.params.categoryId.toString() } })
)

watch(route, () => refetch())

const mutation = useMutation(putTasks)
const delTask = useMutation(deleteTask)
const create = useMutation(postTask)

const handleToggleStatus = async (isCompleted: boolean, taskId: string) =>
  await mutation.mutate({
    params: {
      taskId,
      taskData: {
        completed: isCompleted
      }
    }
  })

const editItem = (index: number, event: MouseEvent, taskId: string) => {
  editableId.value = taskId
  newValue.value = response.value?.results[index].title
  editing.value = true

  const element = event.target as HTMLElement

  const { top, left, height } = element!.getBoundingClientRect()

  if (editInput.value?.inputRef?.parentElement) {
    editInput.value.inputRef.parentElement.style.top = `${top + height + window.scrollY / 3}px`
    editInput.value.inputRef.parentElement.style.left = `${(left + window.scrollX) / 3}px`
  }

  setTimeout(() => {
    editInput.value?.inputRef?.focus()
  }, 0)
}

const saveEdit = async () => {
  editing.value = false
  await mutation.mutate({
    params: {
      taskId: editableId.value,
      taskData: {
        title: newValue.value
      }
    }
  })
  refetch()
}

const handleDelete = async (event: MouseEvent, taskId: string) => {
  await delTask.mutate({
    params: {
      taskId
    }
  })
  refetch()
}

const handleCreate = async (value: string) => {
  if (value.length) {
    await create.mutate({
      params: {
        taskData: {
          title: value,
          categoryId: +route.params.categoryId
        }
      }
    })
    refetch()
  }
}
</script>

<style scoped></style>
