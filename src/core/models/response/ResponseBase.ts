export class ResponseBase<T> {
  data: T = {} as T
  duration?: string
  method?: string
  path?: string
}
