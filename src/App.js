import './App.css';

import { LoginForm } from './components/login-signup-forms/LoginForm';
import { SignUpForm } from './components/login-signup-forms/SignUpForm';


function App() {
  return (
    <div className="App">
      <LoginForm />
      <SignUpForm />
    </div>
  );
}

export default App;
