import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import NoteCard from '../components/NoteCard';

const Notes = ({ inMemoryNotes, deleteFromMemory }) => {
  const [notes, setNotes] = useState([]);
  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  useEffect(() => {
    setNotes(inMemoryNotes.reverse());
  }, [inMemoryNotes]);

  const handleDelete = (id) => {
    deleteFromMemory(id);
  };

  return (
    <Container>
      {/* Grid */}
      {/* <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item xs={12} md={6} lg={4} key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid> */}
      {/* Masonry */}
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
