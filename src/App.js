import './App.css';
import { useEffect, useState } from 'react';
function App() {

  const [tgid, setTgid] = useState(null);
  const [initdata, setInitdata] = useState(null);

  useEffect(() => {
    const userId = GetTelegramUserIdFunction()
    setTgid(userId);

   if(window?.Telegram?.WebApp?.initData){  setInitdata(window?.Telegram?.WebApp?.initData); 
    console.log(window?.Telegram?.WebApp?.initData);
   }

  }, [window.Telegram]);

  function GetTelegramUserIdFunction() {
    var tg = window?.Telegram?.WebApp;

    if (!tg) {
      return 0;
    }

    if (!tg.initData || !tg.initData.user) {
      return 0;
    }

    return tg.initData.user.id;
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          666
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
