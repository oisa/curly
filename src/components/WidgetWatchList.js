import React,  { useState } from 'react';

// Components
import ModuleWatchList from './WidgetWatchListModules/ModuleWatchList';
import ModuleCryptoByMarketCap from './WidgetWatchListModules/ModuleCryptoByMarketCap';
import ModuleSearch from './WidgetWatchListModules/ModuleSearch';

// Icons and Graphics
import BarBackground from '../assets/BarBackground';
import IconArrowRefresh from '../assets/IconArrowRefresh';

const WidgetWatchList = () => {

  let currentWindowToggleWatchList = false;

  const [windowToggleWatchList, setWindowToggleWatchList] = useState(currentWindowToggleWatchList);

  const handleChange = (checked) => {
    setWindowToggleWatchList(checked.target.checked);
  }

  return (
    <div className="window">

      <div className="window-bar">

        <BarBackground />

        <label className="window-toggle">
            <div className="window-toggle-border">
              <input type="checkbox" onChange={ handleChange } ></input>
              <span className="checkmark"></span>
            </div>
          <div className="box">&nbsp;
          </div>
        </label>

        <h2 className="window-title">Your Watch List</h2>
        <a href="#"><IconArrowRefresh /></a>
      </div>

      <div className={windowToggleWatchList === false ? "window-contents" : "window-contents widget-hide"}>

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
