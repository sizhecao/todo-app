import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider'
import { useContext } from 'react';


const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const isAuthPage = ['/login', '/register'].includes(location.pathname);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'white', color: 'primary.main' }}>
      <Toolbar>
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <Typography variant="h6" component="div">
            Todo App
          </Typography>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        {!isAuthPage && (
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
            {isAuthenticated ? (
              <Button color="primary" onClick={handleLogout} variant="outlined">
                Logout
              </Button>
            ) : (
              <>
                <Button
                  component={RouterLink}
                  to="/login"
                  color="primary"
                  variant="outlined"
                >
                  Login
                </Button>
                <Button
                  component={RouterLink}
                  to="/register"
                  color="primary"
                  variant="contained"
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
