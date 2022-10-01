import { Box, Button, Icon, Paper, TextField, useTheme } from "@mui/material";
import React from "react";

interface IFerramentasDaListagemProps{
    textoBusca?: string;
    mostrarInput?:boolean;
    aoMudarTextoDeBusca?:(novoTexto:string) => void;
    textoBotao?: string;
    mostrarBotao?:boolean;
    aoClicarBotao?:(novoTexto:string) => void;
}
export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
    textoBusca = '',
    mostrarInput = false,
    aoMudarTextoDeBusca,
    textoBotao = 'Novo',
    mostrarBotao = true,
    aoClicarBotao,
}) => {
    const theme = useTheme();


    return(
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
            {mostrarInput && (
                <TextField
                    size="small"//Este atributo deixa nosso componente coerente
                    placeholder="Pesquisar..."//Texto de fundo do input
                    value={textoBusca}
                    onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)}//Qdo coloco ?. entre a função e o valor, significa que só vai executar a função se o valor existir
                />
            )}
            {mostrarBotao && (
                <Box flex={1} display="flex" justifyContent="end">
                    <Button
                        variant="contained"//
                        color="primary"//cor do botão
                        disableElevation//desabilitar a sombra
                        onClick={() => aoClicarBotao}
                        endIcon={<Icon>add</Icon>}//icone
                    >{textoBotao}
                    </Button>
                </Box>
            )}
        </Box>
    );
}