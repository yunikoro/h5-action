
import instance from './instance';

const fetch = options => {
  const { method = 'GET', url, data, timeout, responseType, headers = {} } = options
  switch (method.toUpperCase()) {
    case 'GET':
      return instance.get(url, {
        params: data,
        headers,
        responseType,
        timeout,
      })
    case 'POST':
      return instance.post(
        url,
        data,
        {
          headers,
          responseType,
          timeout,
        },
      )
  }
}



export const request = async({ ...config }) => {

}
