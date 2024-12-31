import api from './api';

export const todoApi = {
  getAllTodos: async () => {
    const response = await api.get('/tasks');
    return response.data;
  },

  createTodo: async (title) => {
    const response = await api.post('/tasks', { title });
    return response.data;
  },

  updateTodo: async (id, updates) => {
    const response = await api.put(`/tasks/${id}`, updates);
    return response.data;
  },

  deleteTodo: async (id) => {
    const response = await api.delete(`/tasks/${id}`);
    return response.data;
  },

  toggleTodo: async (id) => {
    const response = await api.patch(`/tasks/${id}/toggle`);
    return response.data;
  }
};