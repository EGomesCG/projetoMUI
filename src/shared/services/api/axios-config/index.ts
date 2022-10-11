import axios from 'axios';
import { Environment } from '../../../environment';
import { responseInterceptor } from './interceptors/Responseinterceptor';

const Api = axios.create({
    baseURL: Environment.URL_BASE,
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => responseInterceptor(error),
);

export {Api};