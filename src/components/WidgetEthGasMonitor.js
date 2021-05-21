import React, { useState } from 'react';

// Components
import EthGasFeesFeed from './WidgetEthGasMonitorModules/EthGasFeesFeed.js';
import EthGasFeesTopGuzzlers from './WidgetEthGasMonitorModules/EthGasFeesTopGuzzlers.js';
import EthGasFeesExchangePrices from './WidgetEthGasMonitorModules/EthGasFeesExchangePrices.js';
import EthGasFeesMarketSentiment from './WidgetEthGasMonitorModules/EthGasFeesMarketSentiment.js';

// Icons & Graphics
import IconArrowRefresh from '../assets/IconArrowRefresh';
import IconWindowBarBackground from '../assets/IconWindowBarBackground';
import BarBackground from '../assets/BarBackground';

const WidgetEthGasMonitor = () => {

  let currentWindowToggleEthGasMonitor = false;

  const [windowToggleEthGasMonitor, setWindowToggleEthGasMonitor] = useState(currentWindowToggleEthGasMonitor);

  const handleChange = (checked) => {
    setWindowToggleEthGasMonitor(checked.target.checked);
  }

  return(
    <div className="window">

      <div className="window-bar">

        <BarBackground />

        <label className="window-toggle">
            <div className="window-toggle-border">
              <input type="checkbox" onChange={ handleChange }></input>
              <span className="checkmark"></span>
            </div>
          <div className="box">&nbsp;
          </div>
        </label>

        <h2 className="window-title">Ethereum Gas Fee Monitor</h2>
        <a href="#"><IconArrowRefresh /></a>
      </div>

      <div className={windowToggleEthGasMonitor === false ? "window-contents" : "window-contents widget-hide"}>

        <div className="window-inner-lining">
          <div className="window-row">
            <EthGasFeesFeed />
            <EthGasFeesTopGuzzlers />
          </div>

          <div className="window-row">
            <EthGasFeesExchangePrices />
            <EthGasFeesMarketSentiment />
          </div>
        </div>

      </div>

    </div>
  );
}

export default WidgetEthGasMonitor;
