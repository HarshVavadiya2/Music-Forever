import './App.css';
import {Left} from './Components/Left'
import {Middle} from './Components/Middle'
import {Right} from './Components/Right'

function App() {
  return (
    <div className="App">
      <Left />
      <Middle />
      {/* <Right /> */}
      <div className="Back"></div>
    </div>
  );
}

export default App;
