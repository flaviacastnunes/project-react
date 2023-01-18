import logo from './logo.svg';
import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather city="lisbon"/>
      </header>
    </div>
  );
}

export default App;
