import { AxiosInstance } from 'axios';
import { errorLogger, requestLogger } from 'axios-logger';
import {isBrowser} from "@/Module/Application/Helper";

const axiosErrorLogger = (error: any) => {
  if (isBrowser()) return error;
  return errorLogger(error);
};

const httpServiceLoggerInit = (instance: AxiosInstance) => {
  instance.interceptors.request.use((request: any) => {
    if (isBrowser()) return request;
    return requestLogger(request);
  }, axiosErrorLogger);

  instance.interceptors.response.use((response: any) => {
    if (isBrowser()) return response;
    return requestLogger(response);
  }, axiosErrorLogger);
};

export default httpServiceLoggerInit;
