import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [tgid, setTgid] = useState(null);
  const [initdata, setInitdata] = useState(null);

  useEffect(() => {
    const userId = GetTelegramUserIdFunction()
    setTgid(userId);

   if(window?.Telegram?.WebApp?.initDataUnsafe)  setInitdata(JSON.stringify(window?.Telegram?.WebApp?.initDataUnsafe));

  }, [window.Telegram]);

  function GetTelegramUserIdFunction() {
    var tg = window?.Telegram?.WebApp;

    if (!tg) {
      return 0;
    }

    if (!tg.initDataUnsafe || !tg.initDataUnsafe.user) {
      return 0;
    }

    return tg.initDataUnsafe.user.id;
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          {tgid ? `Your Telegram ID is ${tgid}` : 'Loading...'}
 
        </p>
        <p>
        {initdata ? `Your Telegram Init Data is ${initdata}` : 'Loading...'}
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
