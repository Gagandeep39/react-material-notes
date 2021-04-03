import { Button, Container, Typography } from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import React from 'react';

const Create = () => {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new Note
      </Typography>
      <Button
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
