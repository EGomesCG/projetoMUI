import { AxiosResponse } from "axios";

export const responseInterceptor = (response: AxiosResponse) => {
    //Aqui podemos retorna a mensagem de sucesso
    return response;
};