import { AxiosError } from 'axios';

const prepareError = (er: AxiosError) => {
  const request = { ...er };

  return {
    code: request.code,
    message_code: (request?.response?.data as any)?.errors?.[0]?.code || request.name,
    message: (request?.response?.data as any)?.errors?.[0]?.message || request.message,
  };
};

export default prepareError;
