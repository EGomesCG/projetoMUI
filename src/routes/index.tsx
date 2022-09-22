import { Routes, Route, Navigate } from "react-router-dom";
export const AppRoutes = () => {
    return (
        <Routes>
            {/* Minhas rotas da pagina - Abaixo config cada rota - a última é serve para uma navegação perdida */}
            <Route path="/pagina-inicial" element={<p>Pagina Inicial</p>}/>
            <Route path="*" element={<Navigate to="/pagina-inicial"/>}/>
        </Routes>
    );
}