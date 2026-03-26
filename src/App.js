import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('User');
  return (
    <div className="App"> 
    <h1>Halo nama ku adi kamu siapa?
    </h1>
    <p>Hallo, {name}!</p>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
      <p>Hitung: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>
      <button onClick={() => setCount(0)}>reset ke 0</button>
    </div>
     
  );
}

export default App;

