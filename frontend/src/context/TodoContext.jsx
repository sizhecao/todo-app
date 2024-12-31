import { useState, useEffect, useContext } from 'react';
import { TodoContext } from './TodoContextProvider';
import { todoApi } from '../api/todoApi';
import { AuthContext } from './AuthContextProvider';

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTodos();
    } else {
      setTodos([]);
    }
  }, [isAuthenticated]);

  const fetchTodos = async () => {
    try {
      const data = await todoApi.getAllTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
      console.error('Error fetching todos:', err);
    }
  };

  const addTodo = async (title) => {
    try {
      const newTodo = await todoApi.createTodo(title);
      setTodos((prev) => [...prev, newTodo]);
      return { success: true };
    } catch (err) {
      console.error('Error adding todo:', err);
      return { success: false, error: 'Failed to add todo' };
    }
  };

  const updateTodo = async (id, title) => {
    try {
      const updatedTodo = await todoApi.updateTodo(id, { title });
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo))
      );
      return { success: true };
    } catch (err) {
      console.error('Error updating todo:', err);
      return { success: false, error: 'Failed to update todo' };
    }
  };

  const deleteTodo = async (id) => {
    try {
      await todoApi.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo._id !== id));
      return { success: true };
    } catch (err) {
      console.error('Error deleting todo:', err);
      return { success: false, error: 'Failed to delete todo' };
    }
  };

  const toggleTodo = async (id) => {
    try {
      const updatedTodo = await todoApi.toggleTodo(id);
      setTodos((prev) =>
        prev.map((todo) => (todo._id === id ? updatedTodo : todo))
      );
      return { success: true };
    } catch (err) {
      console.error('Error toggling todo:', err);
      return { success: false, error: 'Failed to toggle todo' };
    }
  };

  const value = {
    todos,
    error,
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
