import axios from 'axios';
import { responseInterceptor } from './interceptors/Responseinterceptor';

const Api = axios.create({
    baseURL: 'http://localhost:3333'
});

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => responseInterceptor(error),
);

export {Api};