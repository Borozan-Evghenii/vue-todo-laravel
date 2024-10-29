import { AxiosRequestConfig } from 'axios'

export type RequestConfig<Params = undefined> = Params extends undefined
  ? { config?: AxiosRequestConfig }
  : { params: Params; config?: AxiosRequestConfig }

export type Category = {
  id: number
  name: string
  tasks_count: number
}

export type Task = {
  id: number
  title: string
  categoryId: number
  completed: boolean
}

export type BaseResponse<Data> = {
  info: {
    message: string
  }
  results: Data[]
}
