import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  btn: {
    fontSize: 90,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue',
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

const Create = () => {
  const classes = useStyles();
  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new Note
      </Typography>
      <Button
        className={classes.btn}
        type="submit"
        variant="contained"
        color="secondary"
        onClick={() => console.log('Clicked')}
        startIcon={<KeyboardArrowRight />}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Create;
