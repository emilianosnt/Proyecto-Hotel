import { useState } from 'react'
import '../CSS/Login.css';
import logo from '../Components/Icons/Hotel.jpeg';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name, 'Password:', password);
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo del hotel" className="login-logo" />
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={name}
            placeholder='Ingrese su nombre'
            onChange={(e) => setName(e.target.value)} />
          <input
            type="password"
            id="password"
            value={password}
            placeholder='Ingrese su contraseña'
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="login-button">
          Ingresar
        </button>
      </form>
    </div>
  );
}

export default Login;