import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import User from './components/Users/Users';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="users" replace />} />
        <Route path="/users" element={<User />} />
        <Route path="/users/profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
