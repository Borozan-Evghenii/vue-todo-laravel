import { api } from '../instance'
import type { BaseResponse, RequestConfig, Task } from '@/../@types/index'

type putTasksParams = {
  taskId: string
  taskData: Partial<Task>
}

type putTasksProps = RequestConfig<putTasksParams>

export const putTasks = ({ params, config }: putTasksProps) =>
  api.put<BaseResponse<Task>>(`/tasks/${params.taskId}`, params.taskData, config)
