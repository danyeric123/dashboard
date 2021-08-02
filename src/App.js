
import './App.css';
import SideNav from './components/SideNav';
import Stats from './components/Stats';
import Visitors from './components/Visitors';

function App() {
  return (
    <div className="App">
      <SideNav/>
      <Stats/>
      <Visitors/>
    </div>
  );
}

export default App;
