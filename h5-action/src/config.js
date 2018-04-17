/**
 *  BaseUrl 配置
 * @type {{}}
 */

const isDev = process.env.NODE_ENV !== 'production';

const baseURLDev = '';
const baseURLProd = '';

module.exports = {
  baseURL: isDev ? baseURLDev : baseURLProd,
  preUrlPath: '',
};
