import { Box, useTheme, Paper, Button, Icon, Divider } from "@mui/material";

export const FerramentasDeDetalhes: React.FC = () => {
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
                    
        {/* <Box flex={1} display="flex" justifyContent="end">
            </Box> */}
            <Button
                variant="contained"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                startIcon={<Icon>seve</Icon>}//icone - endIcon ou startIcon, serve para posicionar o icone em qual lado do texto
            >Salvar
            </Button>
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                startIcon={<Icon>save</Icon>}//icone
            >Salvar e voltar
            </Button>
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                startIcon={<Icon>delete</Icon>}//icone
            >Apagar
            </Button>
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                startIcon={<Icon>add</Icon>}//icone
            >Novo
            </Button>
            <Divider variant="middle" orientation="vertical"/>
            <Button
                variant="outlined"//
                color="primary"//cor do botão
                disableElevation//desabilitar a sombra
                startIcon={<Icon>arrow_back</Icon>}//icone
            >Voltar
            </Button>
            
    </Box>
    );
};