import { List, Paper, Typography, Box } from '@mui/material';
import TodoItem from './TodoItem';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextProvider';

const TodoList = ({ todos, onToggle, onDelete, onEdit }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <Typography>Please login to manage your to-dos</Typography>
      </Box>
    );
  }

  if (!todos.length) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '200px',
        }}
      >
        <Typography color="text.secondary">
          No todos. 
        </Typography>
      </Box>
    );
  }

  return (
    <Paper elevation={2}>
      <List sx={{ width: '100%' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </List>
    </Paper>
  );
};

export default TodoList;
