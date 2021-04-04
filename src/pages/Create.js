import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core';
import { KeyboardArrowRight } from '@material-ui/icons';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

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
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const Create = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState('todos');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Resset Error
    setTitleError(false);
    setDetailsError(false);

    // Check for validation
    if (!title) setTitleError(true);
    if (!details) setDetailsError(true);

    // Display with ata is valid
    if (title && details) {
      console.log(title, details, category);
      fetch('http://localhost:3001/notes', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push('/'));
    }
  };

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          label="Title"
          variant="outlined"
          required
          fullWidth
          color="secondary"
          className={classes.field}
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          required
          fullWidth
          multiline
          rows="4"
          color="secondary"
          className={classes.field}
          error={detailsError}
        />

        <FormControl className={classes.field}>
          <FormLabel>Notes Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              value="money"
              control={<Radio />}
              label="Money"
            ></FormControlLabel>

            <FormControlLabel
              value="todos"
              control={<Radio />}
              label="Todo"
            ></FormControlLabel>

            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminder"
            ></FormControlLabel>

            <FormControlLabel
              value="work"
              control={<Radio />}
              label="Work"
            ></FormControlLabel>
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          startIcon={<KeyboardArrowRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
