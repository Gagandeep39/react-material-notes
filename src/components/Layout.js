import { Drawer, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const drawerWidth = 240;
const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
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
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* TODO App Drawer */}

      {/* TODO Side drawer */}
      <Drawer
        variant="permanent"
        className={classes.drawer}
        anchor="left"
        classes={{ paper: classes.drawerPaper }} // Override drwer pper width(Width of drwer)
      >
        <div>
          <Typography variant="h5">Todo App</Typography>
        </div>
      </Drawer>

      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
