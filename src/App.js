import './App.css';
import TelegramLoginButton from 'react-telegram-login';

function App() {

  const handleTelegramResponse = response => {
    console.log(response);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="kasoqian_bot" />
      </header>
    </div>
  );
}

export default App;
