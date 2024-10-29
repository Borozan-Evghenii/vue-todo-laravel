import { api } from '../instance'
import type { BaseResponse, RequestConfig, Task } from '@/../@types/index'

type getTasksParams = {
  categoryId: string
}

type getTasksProps = RequestConfig<getTasksParams>

export const getTasks = ({ params, config }: getTasksProps) =>
  api.get<BaseResponse<Task>>('/tasks', { ...config, params: params })
