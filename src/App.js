import { Header } from './components/Header/header'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="container">
        <div className="row">
          <div className="col xs">
            Column
          </div>
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
