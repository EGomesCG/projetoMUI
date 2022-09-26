import { Button } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppThemeContext } from "../shared/contexts";

export const AppRoutes = () => {
    const { toggleTheme } = useAppThemeContext();
    return (
        <Routes>
            {/* Minhas rotas da pagina - Abaixo config cada rota - a última é serve para uma navegação perdida */}
            <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}>Mudar tema</Button>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}