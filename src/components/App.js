// Components
import Header from './Header';

// Modules
import WidgetEthGasMonitor from './WidgetEthGasMonitor';
import WidgetWatchList from './WidgetWatchList';

import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="widgets">
        <WidgetEthGasMonitor />
        <WidgetWatchList />
      </div>
    </div>
  );
}

export default App;
