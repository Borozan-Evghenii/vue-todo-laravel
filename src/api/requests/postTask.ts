import { api } from '../instance'
import type { BaseResponse, RequestConfig, Task } from '@/../@types/index'

type postTasksParams = {
  taskData: Pick<Task, 'title' | 'categoryId'>
}

type postTasksProps = RequestConfig<postTasksParams>

export const postTask = ({ params, config }: postTasksProps) =>
  api.post<BaseResponse<Task>>(`/tasks`, params.taskData, config)
