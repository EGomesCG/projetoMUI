//Este componente tem o objetivo de criar um menu lateral com o material UI
import { Avatar, Divider, Drawer, useTheme, List, ListItemButton, ListItemIcon, ListItemText, Icon } from "@mui/material";
import {Box} from '@mui/system'

interface IMenuLateral {
    children: React.ReactNode
};

export const MenuLateral: React.FC<IMenuLateral> = ({ children}) => {
    //Este useTheme acessa as propriedades de temas do MUI
    const theme = useTheme();
    return(
        <>
         {/* open={true} variant='permanent' 
         Para abrir o menu na app iremos passar alguns atributos: open=vdd OU variante pode ser permanente=DESKTOP, 
         temporario=SMARTFONE e persistente 
        */}
         <Drawer variant='permanent'>
            {/* O Box parece a div, nos ajuda a definir o tamhanho do nosso menu 
            Este Box irá conter todo o conteudo lateral */}
            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                {/* Estou envolvendo o avatar/img num box */}
                <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
                    <Avatar
                    sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
                    alt="Avatar" 
                    src="https://pps.whatsapp.net/v/t61.24694-24/286351121_759359055417621_4694189820803329372_n.jpg?ccb=11-4&oh=01_AVynAlkdrL1FWuuqghx9qCmtPZqrg-TzP7-o-OGKD7zOFg&oe=6340E1E0"/>
                </Box>
                {/* Linha */}
                <Divider />
                {/* Menu flex=1 significa que o box irá ocupar todo o espaço disponivel */}
                <Box flex={1}>
                    <List component="nav">
                        <ListItemButton>
                            <ListItemIcon>
                                {/* Duas formas de chamar os icones a 1ª é essa da home e a 2ª a tags vem com o nome do icone.svg -  <HomeIcon/>*/}
                                <Icon>home</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Página Inicial"/>
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </Drawer>
        {/* O MUI tem unidade de medida especifica: (1=4px, 2=8px) 28=28x4  - spacing é uma função
        com isto o conteudo da nossa aplicação irá avançar para o centro da tela 112px
        Este box terá o conteudo das paginas
        */}
        <Box height="100vh" marginLeft={theme.spacing(28)}>
            {children}
        </Box>
        </>
    );
};