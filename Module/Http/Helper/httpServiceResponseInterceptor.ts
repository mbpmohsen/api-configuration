import { ResponseInterceptorFunction } from 'ts-retrofit';

const httpServiceResponseInterceptor: ResponseInterceptorFunction = (response) => {
  return response;
};

export default httpServiceResponseInterceptor;
