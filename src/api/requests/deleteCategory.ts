import { api } from '../instance'
import type { BaseResponse, RequestConfig, Task } from '@/../@types/index'

type deleteCategoryParams = {
  categoryId: string
}

type deleteCategoryProps = RequestConfig<deleteCategoryParams>

export const deleteCategory = ({ params, config }: deleteCategoryProps) =>
  api.delete<BaseResponse<Task>>(`/category/${params.categoryId}`, config)
