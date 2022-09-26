
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts";

export const App = () => {
  return (
    <AppThemeProvider>
      {/* <ThemeProvider theme={DarkTheme}> -> com nosso componente de tema pronto este não será necessario*/}
        {/* Tema da site */}
        <BrowserRouter>
          {/* Acima -> é um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes 
          | Abaixo -> Minhas rotas de paginas da app*/}
          <AppRoutes/>
        </BrowserRouter>
      {/* </ThemeProvider> */}
    </AppThemeProvider>
  );
}