import './App.css';
import {useEffect} from "react";


function App() {

    useEffect(() => {
        tg.ready()
    }, []);



  return (
    <div className="App">
      <button onClick={onclose}>
          close
      </button>
    </div>
  );
}

export default App;
