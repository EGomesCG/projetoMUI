
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { MenuLateral } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";
import { AppDrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
       <AppDrawerProvider>

      {/* <ThemeProvider theme={DarkTheme}> -> com nosso componente de tema pronto este não será necessario*/}
        {/* Tema da site */}
        <BrowserRouter>
          <MenuLateral>
            {/* Acima -> é um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes 
            | Abaixo -> Minhas rotas de paginas da app*/}
            <AppRoutes/>
          </MenuLateral>
        </BrowserRouter>
      {/* </ThemeProvider> */}
        </AppDrawerProvider>
    </AppThemeProvider>
  );
}