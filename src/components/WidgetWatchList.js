// Components
import ModuleWatchList from './WidgetWatchListModules/ModuleWatchList';
import ModuleCryptoByMarketCap from './WidgetWatchListModules/ModuleCryptoByMarketCap';
import ModuleSearch from './WidgetWatchListModules/ModuleSearch';


// Icons and Graphics
import BarBackground from '../assets/BarBackground';
import IconArrowRefresh from '../assets/IconArrowRefresh';

const WidgetWatchList = () => {
  return (
    <div className="window">

      <div className="window-bar">

        <BarBackground />

        <label className="window-toggle">
            <div className="window-toggle-border">
              <input type="checkbox"></input>
              <span className="checkmark"></span>
            </div>
          <div className="box">&nbsp;
          </div>
        </label>

        <h2 className="window-title">Your Watch List</h2>
        <a href="#"><IconArrowRefresh /></a>
      </div>

      <div className="window-contents">

        <div className="window-inner-lining">
          <div className="window-row">
            <ModuleWatchList />
          </div>

          <div className="window-row">
            <ModuleCryptoByMarketCap />
            <ModuleSearch />
          </div>
        </div>

      </div>

    </div>
  )
}

export default WidgetWatchList;
