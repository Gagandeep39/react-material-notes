import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  test: {
    border: (note) => (note.category === 'work' ? '1px solid red' : ''),
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
