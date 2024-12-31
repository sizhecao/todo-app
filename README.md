# Todo App with React and Node.js

A full-stack todo application built with React frontend and Node.js backend with MongoDB. 

## Project Structure

```
todo-app/
├── frontend/     # React frontend
└── backend/      # Node.js backend
```

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install npm dependencies:
```bash
npm install
```
3. Set up enviornment variables in .env file
4. Start the server:
```bash
npm start
```

The backend server will start on http://localhost:5001

## Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install npm dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev
```

The frontend application will start on http://localhost:5173

## API Endpoints

### Authentication
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login a registered user
- GET /api/auth/profile - Get logged in user's profile

### Todos
- GET /api/tasks - Get all todo items
- POST /api/tasks - Create a new todo item
- PUT /api/tasks/:id - Update a todo item
- DELETE /api/tasks/:id - Delete a todo item
- PATCH /api/tasks/:id/toggle - Toggle a todo item's completion


## Technologies Used

### Frontend
- React
- React Router
- Context API for state management
- Axios
- Material-UI

### Backend
- Node.js
- Express
- MongoDB & Mongoose
- JWT for authentication
- bcrypt for password hashing