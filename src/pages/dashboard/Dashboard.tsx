import React from "react";
import { FerramentasDeDetalhes } from "../../shared/components";
import { LayoutBasePagina } from "../../shared/layouts";

interface IDashboard {
    children?: React.ReactNode
};

export const Dashboard: React.FC<IDashboard> = ({children}) => {
    return (
        <LayoutBasePagina 
            titulo="Página Inicial" 
            barraDeFerramentas={(
                <FerramentasDeDetalhes mostrarBotaoSalvarFechar />
             )}
        >
            {children}
            Conteudo
        </LayoutBasePagina>
    );
}