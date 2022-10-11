import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
    //Posso tratar o erro atraves dos parametros que o axios nos dar acesso e dar uma resposta coerente ao usuário
    if(error.message === 'Network Error'){
        return Promise.reject(new Error('Erro de conexão.'));
    }
    if(error.response?.status === 401){
        //
    }
    //Se todas as condições não forem satisfeitas retorno essa mensagem de erro
    return Promise.reject(error);
};