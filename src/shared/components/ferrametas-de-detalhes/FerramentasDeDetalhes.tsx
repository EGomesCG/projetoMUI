import { Box, useTheme, Paper, Button, Icon, Divider, Skeleton, Typography, Theme, useMediaQuery } from "@mui/material";

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
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Salvar
                </Typography>
            </Button>
        )}
        {/* Componente Skeleton serve para deixar carregando(botão), enquanto o conteudo da página é carregada na tela*/}
        {(mostrarBotaoSalvarCarregando && (
            <Skeleton width={110} height={60}/>
        ))}

        {(mostrarBotaoSalvarFechar && !mostrarBotaoSalvarFecharCarregando && !smDown && !mdDown) && (
            <Button
                variant="outlined"
                color="primary"
                disableElevation
                onClick={aoClicarSalvarFechar}
                startIcon={<Icon>save</Icon>}
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Salvar e voltar
                </Typography>
            </Button>
        )}
        {((mostrarBotaoSalvarFecharCarregando && !smDown) && (
            <Skeleton width={180} height={60}/>
        ))}

        {(mostrarBotaoApagar && !mostrarBotaoApagarCarregando) && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarApagar}
                startIcon={<Icon>delete</Icon>}//icone
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Apagar
                </Typography>
            </Button>
        )}
        {(mostrarBotaoApagarCarregando && (
            <Skeleton width={110} height={60}/>
        ))}

        {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarNovo}
                startIcon={<Icon>add</Icon>}//icone
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    {textoBotaoNovo}
                </Typography>
            </Button>
        )}
        {((mostrarBotaoNovoCarregando && !smDown) && (
            <Skeleton width={110} height={60}/>
        ))}
        {(mostrarBotaoVoltar && (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarFechar)
        ) && (
            <Divider variant="middle" orientation="vertical"/>
        )}
        {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                onClick={aoClicarVoltar}
                startIcon={<Icon>arrow_back</Icon>}//icone
            >
                <Typography variant="button" whiteSpace="nowrap" textOverflow="ellipsis" overflow="hidden">
                    Voltar
                </Typography>
            </Button>
        )}
         {(mostrarBotaoVoltarCarregando && (
            <Skeleton width={110} height={60}/>
        ))}
    </Box>
    );
};