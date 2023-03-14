import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { HashRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { CyclesContextProvider } from './contexts/CyclesContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <HashRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </HashRouter>
    </ThemeProvider>
  );
}
