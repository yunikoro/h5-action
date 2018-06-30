
import instance from './instance';

const fetch = (options) => {
  const { method = 'GET', url, data, timeout, responseType, headers = {} } = options;
  switch (method.toUpperCase()) {
    case 'GET':
      return instance.get(url, {
        params: data,
        headers,
        responseType,
        timeout,
      });
    case 'POST':
      return instance.post(
        url,
        data,
        {
          headers,
          responseType,
          timeout,
        },
      );
    default:
      return instance(options);
  }
};

const request = async ({ ...config }) => {
  try {
    /* eslint-disable camelcase */
    const { data: { error_code, err_msg, data } } = await fetch({ ...config });
    if (error_code !== null && error_code !== 0) {
      return Promise.reject({ message: err_msg, statusCode: error_code });
    }
    return Promise.resolve({
      message: err_msg || '',
      statusCode: error_code || 0,
      result: data,
    });
  } catch (e) {
    const { response: { status, data: { message } } } = e;
    return Promise.reject({ status, message });
  }
};

export default request;
