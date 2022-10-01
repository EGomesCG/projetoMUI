import { Box, useTheme, Paper, Button, Icon, Divider } from "@mui/material";

interface IFerramentasDeDetalhesProps{
    textoBotaoNovo?: string;

    mostrarBotaoNovo?:boolean;
    mostrarBotaoVoltar?:boolean;
    mostrarBotaoApagar?:boolean;
    mostrarBotaoSalvar?:boolean;
    mostrarBotaoSalvarFechar?:boolean;
    
    aoClicarNovo?: () => void;
    aoClicarVoltar?: () => void;
    aoClicarApagar?: () => void;
    aoClicarSalvar?: () => void;
    aoClicarSalvarFechar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoSalvar = true,
    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvarFechar = false,
    
    aoClicarNovo,
    aoClicarVoltar,
    aoClicarApagar,
    aoClicarSalvar,
    aoClicarSalvarFechar,
}) => {
    const theme = useTheme();
    return (
    <Box 
        height={theme.spacing(5)} //altura - para isto usamos o theme do MUI
        component={Paper}//o Box poderá usar os atributos do componente paper
        marginX={1} //diz qual margem de fora do nosso elemento - X dará uma distancia do nosso menu lateral
        padding={1} //É um espaço interno
        paddingX={2} //um espaço so nas laterais internas
        display="flex"//os componentes um do lado do outo
        gap={1}//diz a distância de um elemento do outro
        alignItems="center"//alinha horizontalmente os itens
    >
        {mostrarBotaoSalvar && (
            <Button
                variant="contained"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarSalvar}
                startIcon={<Icon>save</Icon>}//icone - endIcon ou startIcon, serve para posicionar o icone em qual lado do texto
            >Salvar
            </Button>
        )}
        {mostrarBotaoSalvarFechar && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarSalvarFechar}
                startIcon={<Icon>save</Icon>}//icone
            >Salvar e voltar
            </Button>
        )}
        {mostrarBotaoApagar && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarApagar}
                startIcon={<Icon>delete</Icon>}//icone
            >Apagar
            </Button>
        )}
        {mostrarBotaoNovo && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarNovo}
                startIcon={<Icon>add</Icon>}//icone
            >{textoBotaoNovo}
            </Button>
        )}
        <Divider variant="middle" orientation="vertical"/>
        {mostrarBotaoVoltar && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarVoltar}
                startIcon={<Icon>arrow_back</Icon>}//icone
            >Voltar
            </Button>
        )}
    </Box>
    );
};