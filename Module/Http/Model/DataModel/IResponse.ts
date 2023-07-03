import { Response } from 'ts-retrofit';

export type IResponse<T = any, M = any> = Response<{
  data: T,
  meta: M,
}>;
