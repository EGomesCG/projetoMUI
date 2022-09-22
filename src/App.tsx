import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      {/* Tema da site */}
      <BrowserRouter>
        {/* Acima -> é um componente responsável por informar a nossa aplicação que teremos um roteamento de componentes 
        | Abaixo -> Minhas rotas de paginas da app*/}
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
  );
}