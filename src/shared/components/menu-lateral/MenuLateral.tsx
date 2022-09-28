//Este componente tem o objetivo de criar um menu lateral com o material UI
import { Avatar, Divider, Drawer, useTheme, List, ListItemButton, ListItemIcon, ListItemText, Icon, useMediaQuery } from "@mui/material";
import {Box} from '@mui/system'
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { useAppDrawerContext, useAppThemeContext } from "../../contexts";

interface IMenuLateral {
    children: React.ReactNode
};
interface IListItemLinkProps {
    icone:string;
    label:string;
    to:string;
    onClick: (() => void) | undefined;
}

//Este componente possibilita o fechamento do menu lateral quando clicamos nele
const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icone, label, onClick }) => {
    //Para navegar para outra tela
    const navigate = useNavigate();

    //Hook - Estes hooks me possibilita saber se o menu está selecionado ou não
    //Recebe a (to) com a rota
    const resolvedPath = useResolvedPath(to);
    //Consegui verificar qual rota está selecionada
    const match = useMatch({path: resolvedPath.pathname, end:false});

    //Função que trata a navegação e o click
    const handleClick = () => {
        navigate(to);
        //Três formas de resolver undefined
        // if(onClick) onClick(); | onClick && onClick();
        onClick?.()
    };

    return(
        <ListItemButton selected={!!match} onClick={handleClick}>
        <ListItemIcon>
            <Icon>{icone}</Icon>
            </ListItemIcon>
            <ListItemText primary={label}/>
        </ListItemButton>
    );
};

export const MenuLateral: React.FC<IMenuLateral> = ({ children}) => {
    //Este useTheme acessa as propriedades de temas do MUI
    const theme = useTheme();

    //Para trabalhar com responsivo, configuramos assim...
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    //Com o contexto feito posso acessar a variavel ou a função
    const {isDrawerOpen, toggleDrawerOpen, drawerOptions} = useAppDrawerContext();

    //Para alternar o tema da app
    const {toggleTheme} = useAppThemeContext();
    
    return(
        <>
         {/* open={true} variant='permanent' 
         Para abrir o menu na app iremos passar alguns atributos: open=vdd OU variante pode ser 
         permanente=DESKTOP(continua o tempo todo na tela - sempre aberto), 
         temporario=SMARTFONE(queremos que ele fica sobre as coisas - fica uma parte transparente e escura) e 
         persistente(o menu se encolhe e abre mais permanece na tela - se expande na tela e recolhe e fica apenas os icones aparecendo)
        */}
        {/* Na nossa app iremos alterna entre permanent e temporario ...., 
        então, podemos realizar a comparação pra saber qual o tamanho da tela */}
         <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'}
         onClose={toggleDrawerOpen}
        
         >
            {/* O Box parece a div, nos ajuda a definir o tamhanho do nosso menu 
            Este Box irá conter todo o conteudo lateral */}
            <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                {/* Estou envolvendo o avatar/img num box */}
                <Box    width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
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
                        {drawerOptions.map((drawerOption, index) => (
                            <ListItemLink
                            key={index}
                            icone={drawerOption.icon}
                            to={drawerOption.path}
                            label={drawerOption.label}
                            onClick={smDown ? toggleDrawerOpen : undefined}
                            />
                        ))}
                    </List>
                </Box>
                <Box>
                    <List component="nav">
                        <ListItemButton onClick={toggleTheme}>
                            <ListItemIcon>
                                <Icon>dark_mode</Icon>
                            </ListItemIcon>
                            <ListItemText primary="Alternar tema"/>
                        </ListItemButton>
                    </List>
                </Box>
            </Box>
        </Drawer>
        {/* O MUI tem unidade de medida especifica: (1=4px, 2=8px) 28=28x4  - spacing é uma função
        com isto o conteudo da nossa aplicação irá avançar para o centro da tela 112px
        Este box terá o conteudo das paginas
        */}
        <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
            {children}
        </Box>
        </>
    );
};