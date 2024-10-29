import { onMounted, ref } from 'vue'

export const useQuery = <Function extends (...args: unknown[]) => any>(
  fn: Function,
  options?: {
    skipInitialRequest: boolean
  }
) => {
  const loading = ref(true)
  const response = ref<Awaited<ReturnType<typeof fn>>['data'] | null>(null)
  const error = ref<Error | null>(null)

  const query = async (...args: Parameters<Function>) => {
    loading.value = true
    error.value = null

    try {
      const res = await fn(...args)
      response.value = res.data
    } catch (err) {
      error.value = err as Error
      response.value = []
    } finally {
      loading.value = false
    }
  }

  if (!options?.skipInitialRequest) {
    onMounted(query)
  }

  return {
    loading,
    response,
    error,
    refetch: query
  }
}
