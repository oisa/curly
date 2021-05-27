import React, { useState } from 'react';

// Components
import ModulePortfolio from './WidgetPortfolioModules/ModulePortfolio';
import ModuleWallets from './WidgetPortfolioModules/ModuleWallets';
import ModulePortfolioStats from './WidgetPortfolioModules/ModulePortfolioStats';

// Icons and Graphics
import BarBackground from '../assets/BarBackground';
import IconArrowRefresh from '../assets/IconArrowRefresh';
import IconButtonPointingHand from '../assets/IconButtonPointingHand';

const WidgetPortfolio = () => {

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

        <h2 className="window-title">Your Portfolio</h2>

        <a href="#"><IconArrowRefresh /></a>
        <a className="icon-button-pointing-hand-window-bar" href="#"><IconButtonPointingHand /></a>

      </div>

      <div className={windowToggleWatchList === false ? "window-contents" : "window-contents widget-hide"}>

        <div className="window-inner-lining">
          <div className="window-row">
            <ModulePortfolio />
          </div>

          <div className="window-row">
            <ModulePortfolioStats />
            <ModuleWallets />
          </div>
        </div>

      </div>

    </div>
  )
}

export default WidgetPortfolio;
