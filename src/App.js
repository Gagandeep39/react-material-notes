import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';

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

let inMemoryNotes = [];

function App() {
  const handleCreate = (title, details, category) => {
    inMemoryNotes.push({ title, details, category, id: inMemoryNotes.length });
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes inMemoryNotes={inMemoryNotes} />
            </Route>
            <Route path="/create">
              <Create handleCreate={handleCreate} />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
