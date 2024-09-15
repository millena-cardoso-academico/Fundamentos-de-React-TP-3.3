import { useState } from 'react';
import Greeting from './Greeting';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted ? (
        <form className="form" onSubmit={handleSubmit}>
          <h1 className="title">Digite seu nome e idade</h1>
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input"
          />
          <input
            type="number"
            placeholder="Sua idade"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      ) : (
        <Greeting name={name} age={Number(age)} />
      )}
    </div>
  );
};

export default App;
