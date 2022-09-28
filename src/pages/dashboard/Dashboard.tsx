import React from "react";
import { LayoutBasePagina } from "../../shared/layouts";

interface IDashboard {
    children?: React.ReactNode
};

export const Dashboard: React.FC<IDashboard> = ({children}) => {
    return (
        <LayoutBasePagina titulo="Página Inicial" barraDeFerramentas={<>Barra de Ferramentas</>}>
            {children}
            Conteudo
        </LayoutBasePagina>
    );
}