import { useContext } from 'react';
import { Box, Typography, Alert, CircularProgress } from '@mui/material';
import TodoInput from './todos/TodoInput';
import TodoList from './todos/TodoList';
import { TodoContext } from '../context/TodoContextProvider';

const Home = () => {
  const { todos, loading, error, addTodo, updateTodo, deleteTodo, toggleTodo } =
    useContext(TodoContext);

  const handleAddTodo = async (title) => {
    const result = await addTodo(title);
    if (!result.success) {
      console.error(result.error);
    }
  };

  const handleUpdateTodo = async (id, title) => {
    const result = await updateTodo(id, title);
    if (!result.success) {
      console.error(result.error);
    }
  };

  const handleDeleteTodo = async (id) => {
    const result = await deleteTodo(id);
    if (!result.success) {
      console.error(result.error);
    }
  };

  const handleToggleTodo = async (id) => {
    const result = await toggleTodo(id);
    if (!result.success) {
      console.error(result.error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: 'center', mb: 4 }}
      >
        Todo List
      </Typography>

      <TodoInput onAddTodo={handleAddTodo} />

      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {loading ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 200,
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TodoList
          todos={todos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
          onEdit={handleUpdateTodo}
        />
      )}
    </Box>
  );
};

export default Home;
