import { api } from '../instance'
import type { BaseResponse, RequestConfig, Task } from '@/../@types/index'

type deleteTasksParams = {
  taskId: string
}

type deleteTasksProps = RequestConfig<deleteTasksParams>

export const deleteTask = ({ params, config }: deleteTasksProps) =>
  api.delete<BaseResponse<Task>>(`/tasks/${params.taskId}`, config)
