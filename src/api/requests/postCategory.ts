import { api } from '../instance'
import type { BaseResponse, Category, RequestConfig } from '@/../@types/index'

type postCategoryParams = {
  category: Pick<Category, 'name'>
}

type postCategoryProps = RequestConfig<postCategoryParams>

export const postCategory = ({ params, config }: postCategoryProps) =>
  api.post<BaseResponse<Category>>(`/category`, params.category, config)
