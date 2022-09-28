import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Theme } from "@mui/system";
import React from "react";
import { useAppDrawerContext } from "../contexts";

interface ILayoutBasePagina {
    titulo: string;
    barraDeFerramentas?:React.ReactNode;
    children?: React.ReactNode
};

export const LayoutBasePagina: React.FC<ILayoutBasePagina> = ({children, titulo, barraDeFerramentas}) => {
    //1ª Opção - Se declarar antes faço uma função e importo Theme do MUI
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
    const theme = useTheme();
    //2ª Opção - declarar depois do theme 
    // const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const {toggleDrawerOpen} = useAppDrawerContext();

    return(
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} gap={1} display="flex" alignItems="center" height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
                {/* O hamburger do menu lateral */}
                {smDown && (
                    <IconButton onClick={toggleDrawerOpen}>
                        <Icon>menu</Icon>
                    </IconButton>
                )}
                <Typography 
                    variant={smDown ? "h5" : mdDown ? "h4" : "h3"}
                    whiteSpace="nowrap"//
                    overflow="hidden"//
                    textOverflow="ellipsis"//No final do texto se for grande ficará três pontinhos...
                >{titulo}
                 </Typography>
            </Box>
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}
            <Box flex={1} overflow="auto">
                {children}
            </Box>
        </Box>
    );
};