import 'react-perfect-scrollbar/dist/css/styles.css';
import { useRoutes } from 'react-router-dom';
import { ThemeProvider, StyledEngineProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { useEffect } from 'react';
import Login from "src/pages/Login";
import { Link as RouterLink, useNavigate } from 'react-router-dom';


const App = () => {
  const content = useRoutes(routes);
  const navigate = useNavigate();

  var token = localStorage.getItem("token");
  
  if (token !== null) {
    
    return (
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            {content}
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>
    );

  }
  else {
    console.log("elss")
    return (
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Login />
          </ThemeProvider>
        </StyledEngineProvider>
      </Provider>

    )

  }
};

export default App;
