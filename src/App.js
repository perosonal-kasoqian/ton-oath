import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [tgid, setTgid] = useState(null);

  useEffect(() => {
    const tg = window?.Telegram?.WebApp;
    const userId = tg?.initDataUnsafe?.user?.id;
    setTgid(userId);
    
  }, [window.Telegram]);



  return (
    <div className="App">
      <header className="App-header">
        <p>
          {tgid ? `Your Telegram ID is ${tgid}` : 'Loading...'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
