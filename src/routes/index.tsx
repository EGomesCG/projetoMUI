import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDrawerContext } from "../shared/contexts";

export const AppRoutes = () => {
    const { toggleDrawerOpen } = useAppDrawerContext();

    return (
        <Routes>
            {/* Minhas rotas da pagina - Abaixo config cada rota - a última é serve para uma navegação perdida */}
            <Route path="/pagina-inicial" element={
            <Button
                variant="contained"
                color="primary" 
                onClick={toggleDrawerOpen}
                >
                    Menu lateral
                </Button>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}