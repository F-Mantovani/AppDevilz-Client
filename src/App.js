import './App.css';

import { LoginForm } from './components/login-signup-forms/LoginForm';
import { SignUpForm } from './components/login-signup-forms/SignUpForm';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginForm />} />
        <Route path='/' element={<SignUpForm />} />
      </Routes> 
    </div>
  );
}

export default App;
