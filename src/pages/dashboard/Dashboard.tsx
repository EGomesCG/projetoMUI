import React from "react";
import { BarraDeFerramentas } from "../../shared/components";
import { LayoutBasePagina } from "../../shared/layouts";

interface IDashboard {
    children?: React.ReactNode
};

export const Dashboard: React.FC<IDashboard> = ({children}) => {
    return (
        <LayoutBasePagina 
            titulo="Página Inicial" 
            barraDeFerramentas={(
                <BarraDeFerramentas
                mostrarInput
                />
                )}
        >
            {children}
            Conteudo
        </LayoutBasePagina>
    );
}