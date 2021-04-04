import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { blue, green, pink, yellow } from '@material-ui/core/colors';
import { DeleteOutlined } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles({
  test: {
    border: (note) => (note.category === 'work' ? '1px solid red' : ''),
  },
  avatar: {
    backgroundColor: (note) => {
      switch (note.category) {
        case 'work':
          return yellow[700];
        case 'todo':
          return pink[500];
        case 'money':
          return green[500];
        default:
          return blue[500];
      }
    },
  },
});

const NoteCard = ({ note, handleDelete }) => {
  const classes = useStyles(note);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
          avatar={
            <Avatar className={classes.avatar}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
