import { api } from '../instance'
import type { BaseResponse, Category, RequestConfig } from '@/../@types/index'

type getCategoriesProps = RequestConfig

export const getCategories = ({ config }: getCategoriesProps) =>
  api.get<BaseResponse<Category>>('/category', config)
