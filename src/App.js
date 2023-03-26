import { useState } from 'react';
import conecta from './assets/conecte.png';
import './index.css';


function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (email === "eduardo.lino@pucpr.br" && password === "123456") {
      setMessage("Acessado com sucesso!");
    } else {
      setMessage("Usuário ou senha incorretos!");
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">Login</span>
            <span className="login-form-title">
              <img src={conecta} alt="Jovem Programador" />
            </span>

            <div className="wrap-input">
              <input
                className={email !== "" ? 'has-val input' : 'input'}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} //captura o valor da variável
              />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>
            <div className="wrap-input">

              <input
                className={password !== "" ? 'has-val input' : 'input'}
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className='focus-input' data-placeholder='Password'></span>
            </div>
            <div className='container-login-form-btn'>
              <button type="submit" className='login-form-btn' onClick={handleLogin}>Acessar</button>
              <p className='mensagem-login'>{message}</p>
            </div>


            <div className='text-center'>
              <span className='txt1'>Não possui conta? </span>
              <a className='txt2' href='#'>  Criar conta.</a>


            </div>


          </form>
        </div>
      </div>
    </div>

  );
}

export default App;
