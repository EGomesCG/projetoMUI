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
const getById = async(id: number): Promise< IDetalhePessoa | Error> => {
    try{
        const {data} = await Api.get(`/pessoas/${id}`);
        if(data){
            return data;
        }
        return new Error('Erro ao listar os registros.');
    } catch(error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao listar os registros')
    }

};
//Como a interface possui o ID encaspuslamos ela no omit, assim, não vai pedir o ID para nós no momento da criação
//Normalmente a resposta da API quando registramos um novo cadastro, retorna o ID do novo cadastro
const create = async( dados: Omit<IDetalhePessoa, 'id'> ): Promise<number | Error> => {
    try{
        //post enviamos dados para o backend
        const {data} = await Api.post<IDetalhePessoa>(`/pessoas/`, dados);
        if(data){
            //Só retorno o ID pq já possuo os dados no front deste novo registro, não faz sentido o backend ter que retorna os dados 
            //a não ser se os mesmo sofre alguma alteração ou transformação
            return data.id;
        }
        return new Error('Erro ao criar os registros.');
    } catch(error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao criar os registros')
    }
};
const updateById = async(id: number, dados: IDetalhePessoa): Promise<void | Error> => {
    try{
        //put altualizando dados no backend
        //Não precisa esperar os dados do backend
        await Api.put<IDetalhePessoa>(`/pessoas/${id}`, dados);
    } catch(error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao atualizar o registro')
    }
};
const deleteById = async(id: number): Promise<any> => {
    try{
        //delete - exclui um registro no backend
        //Não precisa esperar os dados do backend
        await Api.delete<IDetalhePessoa>(`/pessoas/${id}`);
    } catch(error) {
        console.log(error);
        return new Error((error as {message: string}).message || 'Erro ao apagar o registro')
    }
};
export const PessoasService ={
    getAll,
    getById,
    create,
    updateById,
    deleteById,
};