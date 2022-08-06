import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import GameListContainer from './components/GameListContainer/GameListContainer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <GameListContainer/>
    </div>
  );
}

export default App;
