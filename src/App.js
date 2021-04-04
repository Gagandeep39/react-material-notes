import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './pages/Notes';
import Create from './pages/Create';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import Layout from './components/Layout';
import { useEffect, useState } from 'react';
import myNotes from './assets/db.json';

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
  const [inMemoryNotes, setInMemoryNotes] = useState([]);

  const handleCreate = (title, details, category) => {
    const newState = [
      ...inMemoryNotes,
      {
        title,
        details,
        category,
        id:
          inMemoryNotes[inMemoryNotes.length - 1].id +
          Math.floor(Math.random() * 999),
      },
    ];
    setInMemoryNotes(newState);
  };

  const deleteFromMemory = (id) => {
    const temp = inMemoryNotes.filter((note) => note.id !== id);
    setInMemoryNotes(temp);
  };

  useEffect(() => {
    setInMemoryNotes(myNotes.notes);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes
                inMemoryNotes={inMemoryNotes}
                deleteFromMemory={deleteFromMemory}
              />
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
