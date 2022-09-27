//Através deste contexto podemos compartilhar se a tela está no responsivo ou não
import { createContext, useCallback, useContext, useState } from "react";

//A variavel no desktop=false e no smart=true | a função alterna os valores
interface IDrawerContextData {
    isDrawerOpen:boolean;
    toggleDrawerOpen: () => void;
}
//Essa const recebe os atributos da interface
const DrawerContext = createContext({} as IDrawerContextData);

//Com este export posso resgatar os dados deste contexto
export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
}

//Apartir da v.18 do react o children precisa ser declado 
interface IAppDrawerProvider {
    children: React.ReactNode
};

//Aqui é o meu componente do contexto
export const AppDrawerProvider: React.FC<IAppDrawerProvider> = ({children}) => {
   //essa variavel inicia como false ou seja desktop
    const [isDrawerOpen, setIsdrawerOpen] = useState(false);
    
   //Essa função muda o valor da variavel para true | false
    const toggleDrawerOpen = useCallback(() => {
        setIsdrawerOpen(oldisDrawerOpen => !oldisDrawerOpen);
    }, []);
    

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    );
}
