import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;

function App() {

    useEffect(() => {
        tg.ready()
    }, []);

    const onclose = () => {
        tg.close()
    }

  return (
    <div className="App">
      <button onClick={onclose}>
          close
      </button>
    </div>
  );
}

export default App;
