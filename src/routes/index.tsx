
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
import { useAppDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
    const {  setDrawerOptions } = useAppDrawerContext();

    useEffect(() => {
        setDrawerOptions([
            {
                icon: 'home',
                path:'/pagina-inicial',
                label:'Página Inicial',
                
            },
            {
                icon: 'star',
                path:'/cidades',
                label:'Cidades',
                
            },
        ])
    }
    , []);

    return (
        <Routes>
            {/* Minhas rotas da pagina - Abaixo config cada rota - a última é serve para uma navegação perdida */}
            <Route path="/pagina-inicial" element={
                <Dashboard/>}
            />
            {/* Teste */}
            <Route path="/cidades" element={<></>
                // <Button
                //     variant="contained"
                //     color="primary" 
                //     onClick={toggleDrawerOpen}
                //     >Menu lateral
                // </Button>
                }
            />
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}