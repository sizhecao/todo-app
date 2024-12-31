import { useState } from 'react';
import {
  ListItem,
  ListItemText,
  Checkbox,
  IconButton,
  TextField,
  ListItemIcon,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

const TodoItem = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleEdit = () => {
    if (isEditing && editedTitle !== todo.title) {
      onEdit(todo._id, editedTitle);
    }
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setEditedTitle(todo.title);
    setIsEditing(false);
  };

  return (
    <ListItem
      secondaryAction={
        <>
          {isEditing ? (
            <>
              <IconButton onClick={handleEdit}>
                <CheckIcon />
              </IconButton>
              <IconButton onClick={handleCancel}>
                <CloseIcon />
              </IconButton>
            </>
          ) : (
            <>
              <IconButton onClick={() => setIsEditing(true)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => onDelete(todo._id)}>
                <DeleteIcon />
              </IconButton>
            </>
          )}
        </>
      }
    >
      <ListItemIcon>
        <Checkbox checked={todo.completed} onClick={() => onToggle(todo._id)} />
      </ListItemIcon>
      {isEditing ? (
        <TextField
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      ) : (
        <ListItemText
          primary={todo.title}
          sx={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        />
      )}
    </ListItem>
  );
};

export default TodoItem;
