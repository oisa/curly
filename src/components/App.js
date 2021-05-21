// Components
import Header from './Header';

// Modules
import WidgetEthGasMonitor from './WidgetEthGasMonitor';
import WidgetWatchList from './WidgetWatchList';
import WidgetPortfolio from './WidgetPortfolio';

import logo from '../logo.svg';
import '../App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="widgets">
        <WidgetEthGasMonitor />
        <WidgetWatchList />
        <WidgetPortfolio />
      </div>
    </div>
  );
}

export default App;
