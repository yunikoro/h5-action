/*
 * @Author: a-huang
 * @Date 2018-04-17
 */

import axios from 'axios';
import { baseURL } from '@/config';
import { catchError } from './methods';

const instance = axios.create({
  baseURL,
  timeout: 10000,
});

instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.response.use(response => response, catchError);

export default instance;
