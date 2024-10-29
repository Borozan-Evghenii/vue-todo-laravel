import type { BaseResponse, Category } from '@types'
import type { InjectionKey, Ref } from 'vue'

export const CategoryProvider = Symbol('category') as InjectionKey<{
  categoryRequest: {
    response: Ref<BaseResponse<Category> | null>
    loading: Ref<boolean>
    error: Ref
    refetch: () => void
  }
}>
