import { Environment } from "../../../environment";
import { Api } from "../axios-config";

interface IListagemPessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
};
//Vai representar os detalhes de pessoas da tela de pessoas
interface IDetalhePessoa {
    id: number;
    nomeCompleto: string;
    email: string;
    cidadeId: number;
};
//type é muito parecido com a interface, tem quase mesma função que a interface
type IPessoasComTotalCount = {
    data: IListagemPessoa[];
    totalCount: number;
};

const getAll = async (page = 1, filter = ''): Promise< IPessoasComTotalCount | Error | undefined> => {
    try {
        const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;
        //Busca paginada - npmjs.com/package/json-server#paginate
        //Limite de pagina e registro - quando consultar a tabela pessoas
        //data armazena os dados do backend
        const { data, headers } = await Api.get(urlRelativa);
        //Se tiver dados irá retornar isto.
        if(data) {
            return {
                data,
                totalCount: Number(headers['x-total-count'] || Environment.LIMITE_DE_LINHAS),
            }
        }
        return new Error('Erro ao listar os registros.');
    } catch (error) {
        console.error(error);
        //Tratando a mensagem de erro:
        //1ª Exibirá a mensagem que o backEnd retorna
        //2ª São para os casos que não tem retorno do backEnd
        return new Error((error as {message: string}).message || 'Erro ao listar os registros.');
    }
};
const getById = async(): Promise<any> => {

};const create = async(): Promise<any> => {

};const updateById = async(): Promise<any> => {

};const deleteById = async(): Promise<any> => {

};
export const PessoasService ={
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};