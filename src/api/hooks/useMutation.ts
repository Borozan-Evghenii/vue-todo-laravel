import { ref } from 'vue'

export const useMutation = <Function extends (...args: any[]) => any>(fn: Function) => {
  const loading = ref(true)
  const error = ref<Error | null>(null)

  const mutate = async (...args: Parameters<Function>): Promise<ReturnType<Function>> => {
    loading.value = true
    error.value = null

    try {
      const response = await fn(...args)
      return response
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    mutate
  }
}
