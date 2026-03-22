import { useState } from 'react';
import './App.css';

// Card 1: Counter
function CounterCard() {
  const [count, setCount] = useState(0);

  const cardStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '30px',
    margin: '15px',
    borderRadius: '15px',
    width: '300px',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
    color: 'white',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
    cursor: 'pointer',
  };

  const counterDisplay = {
    fontSize: '60px',
    fontWeight: 'bold',
    margin: '20px 0',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '20px',
    borderRadius: '10px',
  };

  const buttonStyle = {
    padding: '12px 25px',
    margin: '8px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  const addBtnStyle = {
    ...buttonStyle,
    backgroundColor: '#4CAF50',
    color: 'white',
  };

  const resetBtnStyle = {
    ...buttonStyle,
    backgroundColor: '#f44336',
    color: 'white',
  };

  return (
    <div style={cardStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '28px' }}>🔢 Counter</h2>
      <div style={counterDisplay}>{count}</div>
      <div style={{ textAlign: 'center' }}>
        <button 
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
          onClick={() => setCount(count + 1)} 
          style={addBtnStyle}
        >
          ➕ Tambah
        </button>
        <button 
          onMouseEnter={(e) => e.target.style.opacity = '0.8'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
          onClick={() => setCount(0)} 
          style={resetBtnStyle}
        >
          🔄 Reset
        </button>
      </div>
    </div>
  );
}

// Card 2: Greeting
function GreetingCard() {
  const [name, setName] = useState('Pengunjung');

  const cardStyle = {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    padding: '30px',
    margin: '15px',
    borderRadius: '15px',
    width: '300px',
    boxShadow: '0 10px 30px rgba(245, 87, 108, 0.4)',
    color: 'white',
    transition: 'transform 0.3s ease, boxShadow 0.3s ease',
    cursor: 'pointer',
  };

  const greetingText = {
    fontSize: '20px',
    margin: '20px 0',
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '20px',
    borderRadius: '10px',
    minHeight: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const inputStyle = {
    padding: '10px 15px',
    width: '250px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    outline: 'none',
  };

  return (
    <div style={cardStyle} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
         onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
      <h2 style={{ margin: '0 0 20px 0', fontSize: '28px' }}>👋 Sambutan</h2>
      <div style={greetingText}>
        <span>Selamat datang, <strong>{name}</strong>!</span>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Masukkan nama Anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
      </div>
    </div>
  );
}

function App() {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)',
    padding: '40px 20px',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const contentStyle = {
    maxWidth: '700px',
    margin: '0 auto',
  };

  const titleStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '30px',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  };

  const cardsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>✨ Aplikasi React </h1>
        <div style={cardsContainerStyle}>
          <CounterCard />
          <GreetingCard />
        </div>
      </div>
    </div>
  );
}

export default App;
