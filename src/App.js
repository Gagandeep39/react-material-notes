import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';

// Refer https://material-ui.com/customization/default-theme/
// for prperties that can be overriden
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe',
    },
    // Overrides main. light, dark color
    secondary: purple,
  },
  // Import the font in Index.css first
  typography: {
    fontFamily: 'Quicksand',
    // Optional
    fontWeightLight: 400,
    fontWeightBold: 700,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Notes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
