import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
      </Grid>
      {notes.map((note) => (
        <p key={note.id}> {note.title} </p>
      ))}
    </div>
  );
};

export default Notes;
