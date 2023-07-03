/* eslint-disable no-param-reassign */
import { RequestInterceptorFunction } from 'ts-retrofit';
import isBrowser from '@/Module/Application/Helper/isBrowser';
import {AuthService} from "@/Module/Http/Service";

const httpServiceRequestInterceptor: RequestInterceptorFunction = (
  config,
) => {
  if (isBrowser()) {
    const token = AuthService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  if (config.headers?.serverAuthorization) {
    config.headers.Authorization = `Bearer ${config.headers.serverAuthorization}`;
  }

  config.headers.platform = 'web';
  config.withCredentials = false;

  return config;
};

export default httpServiceRequestInterceptor;
