import { useContext, useState } from 'react';
import { Paper, InputBase, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { AuthContext } from '../../context/AuthContextProvider'


const TodoInput = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const { isAuthenticated } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && isAuthenticated) {
      onAddTodo(title.trim());
      setTitle('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        mb: 2
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={isAuthenticated ? "Add a new todo..." : "Login to add todos"}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        disabled={!isAuthenticated}
      />
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <IconButton 
          type="submit" 
          disabled={!title || !isAuthenticated}
        >
          <AddIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default TodoInput;