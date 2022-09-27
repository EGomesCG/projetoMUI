//Através deste contexto podemos compartilhar se a tela está no responsivo ou não
import { createContext, useCallback, useContext, useState } from "react";

//A variavel no desktop=false e no smart=true | a função alterna os valores
interface IDrawerContextData {
    isDrawerOpen:boolean;
    toggleDrawerOpen: () => void;
    drawerOptions:IDrawerOptions[];
    setDrawerOptions: (newDrawerOptions:IDrawerOptions[]) => void;
}
//Apartir da v.18 do react o children precisa ser declado 
interface IAppDrawerProvider {
    children: React.ReactNode
};
interface IDrawerOptions{
    icon: string;
    path: string;
    label:string;
}
//Essa const recebe os atributos da interface
const DrawerContext = createContext({} as IDrawerContextData);

//Com este export posso resgatar os dados deste contexto
export const useAppDrawerContext = () => {
    return useContext(DrawerContext);
}
//Aqui é o meu componente do contexto
export const AppDrawerProvider: React.FC<IAppDrawerProvider> = ({children}) => {
   //essa variavel inicia como false ou seja desktop
    const [isDrawerOpen, setIsdrawerOpen] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<IDrawerOptions[]>([]);
    
   //Essa função muda o valor da variavel para true | false
    const toggleDrawerOpen = useCallback(() => {
        setIsdrawerOpen(oldisDrawerOpen => !oldisDrawerOpen);
    }, []);
    
    const handleSetDrawerOptions = useCallback((newDrawerOptions:IDrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    }, []);

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen, drawerOptions, setDrawerOptions: handleSetDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
}
