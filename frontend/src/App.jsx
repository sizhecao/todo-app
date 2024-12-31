import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Layout from './components/layout/Layout';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { AuthProvider } from './context/AuthContext';
import TodoProvider from './context/TodoContext';

function App() {
  return (
    <Router>
      <CssBaseline />
      <AuthProvider>
        <TodoProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Layout>
        </TodoProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
