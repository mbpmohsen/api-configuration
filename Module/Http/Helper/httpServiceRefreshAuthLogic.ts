/* eslint-disable no-param-reassign */
import isBrowser from '@/Module/Application/Helper/isBrowser';
import AuthService from '@/Module/Http/Service/AuthService';

const httpServiceRefreshAuthLogic = (failedRequest: any) => Promise.resolve({ data: { data: { access_token: 'lorem' } }}).then(async ({
                     data: {
                         data: {
                             access_token
                         },
                     },
                 }) => {
        if (!access_token) {
            return Promise.reject();
        }
        if (isBrowser()) {
            AuthService.setAccessToken(access_token);
        }
        failedRequest.response.config.headers.Authorization = `Bearer ${access_token}`;

        return Promise.resolve();
    })
    .catch(() => {
        return Promise.reject();
    });

export default httpServiceRefreshAuthLogic;
