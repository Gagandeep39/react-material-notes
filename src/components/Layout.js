import {
  AppBar,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { AddCircleOutlined, SubjectOutlined } from '@material-ui/icons';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { format } from 'date-fns';

const drawerWidth = 240;

// Allows overriding defaut valaues
const useStyles = makeStyles((theme) => {
  return {
    page: {
      backgroundColor: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3), // Mustiplies default padding by 3
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(2),
    },
    // Ensures appbar at the right side of drawer
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    // Ensures notes are below appbar
    // Using mixin we apply app the toolbar css to toolbar class
    toolbar: theme.mixins.toolbar,
    // Uses all the available width
    date: {
      flexGrow: '1',
    },
  };
});

const Layout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      route: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color="secondary" />,
      route: '/create',
    },
  ];

  return (
    <div className={classes.root}>
      {/* TODO App Drawer */}
      <AppBar className={classes.appbar} elevation={1}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is {format(new Date(), 'do MMMM Y')}
          </Typography>

          <Typography>Gagandeep Singh</Typography>
        </Toolbar>
      </AppBar>

      {/* TODO Side drawer */}
      <Drawer
        variant="permanent"
        className={classes.drawer}
        anchor="left"
        classes={{ paper: classes.drawerPaper }} // Override drwer pper width(Width of drwer)
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Todo App
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.route)}
              className={location.pathname === item.route ? classes.active : ''}
            >
              <ListItemIcon> {item.icon} </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
