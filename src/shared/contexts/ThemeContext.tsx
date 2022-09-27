//Somente atraves do contexto consigo compartlha as informações do nossos temas na app
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Box, ThemeProvider } from "@mui/material";
import { DarkTheme, LightTheme } from "../../shared/themes";

//São os dados dentro do contexto do tema - name aqui pode receber string ou posso passar direto os temas
//Também temos a função que alterna os temas
interface IThemeContextData {
    themeName:string;
    toggleTheme: () => void;
}
//Este ThemeContext recebe/tem as propriedades que definimos na interface
const ThemeContext = createContext({} as IThemeContextData);

//Com este export posso rescata-lo em qq parte da aplicação e utilizar as propriedades da interface
export const useAppThemeContext = () => {
    return useContext(ThemeContext);
}
//Para não dar conflito alterei o nome do meu contexto para APPThemeProvider, assim, facilita o entendimento quando estou usando 
//componete meu interno da app ou exportado
//Obs. Versão 18 do react typescript o props children está quebrando para resolver isto é preciso realizar este procedimento abaixo.
//Como nesta versão o children não é considerado, então, criamos uma interface para ele e passamos ela como tipagem para nosso componente
interface IAppThemeProvider {
    children: React.ReactNode
};

export const AppThemeProvider: React.FC<IAppThemeProvider> = ({children}) => {
    //Utilizo o proprio nome da variavel da interface, ela irá armazenar o valor do tema atual
    //Preciso tbém passar a tipagem - posso passar tbém os valores diretos
    const [themeName, setThemeName] = useState<string>('light');
    
    //O useCallback tem a capacidade de armazena funções dentro dele
    //Ele é uma função. Estou passando dois parametros para ela 
    //O primeiro é uma função (que o useCallback deixa armazenado na memoria) e 
    //o sungundo uma array de dependêmcias (que vai informar ao APP quando precisa se atualizada na memoria)
    const toggleTheme = useCallback(() => {
        //Irei ustilizar setTheme para comparar os valores do tema antigo com o atual
        //Uso o (old/...) na frente da variavel indicando que irei pegar o valor antigo para comparar
        setThemeName(oldThemeName => oldThemeName === 'light' ? 'dark' : 'light');
    }, []);
    
    //Essa const irá alternar os temas - usamos o useMemo é uma funçao que serve para armazenar valores 
    const apptheme = useMemo(()=> {
        if(themeName === 'light'){ 
            return DarkTheme
        } else{
            return LightTheme;
        }
    },[themeName]);

    return (
        <ThemeContext.Provider value={{ themeName, toggleTheme }}>
            {/* Para resolver o conflito dos dados do value terei que criar uma const useState:name - useCallback:função */}
            {/* Aqui irei agrupar o componente de tema do MUI com o meu */}
            <ThemeProvider  theme={apptheme}>
                {/* Usamos este componente do MUI e defenimos o tamanho da altura e largura como 100% */}
                <Box width="100vw" height="100vw" bgcolor={apptheme.palette.background.default}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
