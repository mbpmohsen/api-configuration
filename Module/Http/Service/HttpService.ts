import axios, {AxiosError} from 'axios';
import { ServiceBuilder } from 'ts-retrofit';
import httpServiceRequestInterceptor from '@/Module/Http/Helper/httpServiceRequestInterceptor';
import httpServiceResponseInterceptor from '@/Module/Http/Helper/httpServiceResponseInterceptor';
import httpServiceLoggerInit from '@/Module/Http/Helper/httpServiceLoggerInit';
import {API_BASE} from "@/Module/Http/Constant";
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import httpServiceRefreshAuthLogic from "@/Module/Http/Helper/httpServiceRefreshAuthLogic";

const axiosInstance = axios.create();
httpServiceLoggerInit(axiosInstance);

createAuthRefreshInterceptor(
    axiosInstance,
    httpServiceRefreshAuthLogic,
    {
        interceptNetworkError: true,
        shouldRefresh(error: AxiosError): boolean {
            return (error?.response?.status === 401);
        },
    },
);
export default new ServiceBuilder()
    .setEndpoint(`${API_BASE}`)
    .setStandalone(true)
    .setRequestInterceptors(httpServiceRequestInterceptor)
    .setResponseInterceptors(httpServiceResponseInterceptor)
