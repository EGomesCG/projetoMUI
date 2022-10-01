import { Box, useTheme, Paper, Button, Icon, Divider, Skeleton } from "@mui/material";

interface IFerramentasDeDetalhesProps{
    textoBotaoNovo?: string;

    mostrarBotaoNovo?:boolean;
    mostrarBotaoVoltar?:boolean;
    mostrarBotaoApagar?:boolean;
    mostrarBotaoSalvar?:boolean;
    mostrarBotaoSalvarFechar?:boolean;

    mostrarBotaoNovoCarregando?:boolean;
    mostrarBotaoVoltarCarregando?:boolean;
    mostrarBotaoApagarCarregando?:boolean;
    mostrarBotaoSalvarCarregando?:boolean;
    mostrarBotaoSalvarFecharCarregando?:boolean;
    
    aoClicarNovo?: () => void;
    aoClicarVoltar?: () => void;
    aoClicarApagar?: () => void;
    aoClicarSalvar?: () => void;
    aoClicarSalvarFechar?: () => void;
}

export const FerramentasDeDetalhes: React.FC<IFerramentasDeDetalhesProps> = ({
    textoBotaoNovo = 'Novo',

    mostrarBotaoSalvarCarregando = false,
    mostrarBotaoNovoCarregando = false,
    mostrarBotaoVoltarCarregando = false,
    mostrarBotaoApagarCarregando = false,
    mostrarBotaoSalvarFecharCarregando = false,
    
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
        {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
            <Button
                variant="contained"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarSalvar}
                startIcon={<Icon>save</Icon>}//icone - endIcon ou startIcon, serve para posicionar o icone em qual lado do texto
            >Salvar
            </Button>
        )}
        {(mostrarBotaoSalvarCarregando && (
            <Skeleton width={110} height={60}/>
        ))}

        {(mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando) && (
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarSalvarFechar}
                startIcon={<Icon>save</Icon>}
            >Salvar e voltar
            </Button>
        )}
        {(mostrarBotaoSalvarFecharCarregando && (
            <Skeleton width={180} height={60}/>
        ))}

        {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarApagar}
                startIcon={<Icon>delete</Icon>}//icone
            >Apagar
            </Button>
        )}
        {(mostrarBotaoApagarCarregando && (
            <Skeleton width={110} height={60}/>
        ))}

        {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando) && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarNovo}
                startIcon={<Icon>add</Icon>}//icone
            >{textoBotaoNovo}
            </Button>
        )}
        {(mostrarBotaoNovoCarregando && (
            <Skeleton width={110} height={60}/>
        ))}

        <Divider variant="middle" orientation="vertical"/>

        {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarVoltar}
                startIcon={<Icon>arrow_back</Icon>}//icone
            >Voltar
            </Button>
        )}
         {(mostrarBotaoVoltarCarregando && (
            <Skeleton width={110} height={60}/>
        ))}
    </Box>
    );
};