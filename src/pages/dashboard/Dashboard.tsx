import React from "react";
import { FerramentasDaListagem, FerramentasDeDetalhes } from "../../shared/components";
import { LayoutBasePagina } from "../../shared/layouts";

interface IDashboard {
    children?: React.ReactNode
};

export const Dashboard: React.FC<IDashboard> = ({children}) => {
    return (
        <LayoutBasePagina 
            titulo="Página Inicial" 
            barraDeFerramentas={(
                <FerramentasDeDetalhes></FerramentasDeDetalhes>
             )}
        >
            {children}
            Conteudo
        </LayoutBasePagina>
    );
}