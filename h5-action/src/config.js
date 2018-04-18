/**
 *  BaseUrl 配置
 * @type {{}}
 */

const isDev = process.env.NODE_ENV !== 'production';

const baseURLDev = 'https://test-api.mobilemart.cn/task-web';
const baseURLProd = 'https://test-api.mobilemart.cn/task-web';

module.exports = {
  baseURL: isDev ? baseURLDev : baseURLProd,
  preUrlPath: '',
};
