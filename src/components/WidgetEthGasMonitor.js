// Components
import EthGasFeesFeed from './EthGasMonitorWidgetModules/EthGasFeesFeed.js';
import EthGasFeesTopGuzzlers from './EthGasMonitorWidgetModules/EthGasFeesTopGuzzlers.js';
import EthGasFeesExchangePrices from './EthGasMonitorWidgetModules/EthGasFeesExchangePrices';
import EthGasFeesMarketSentiment from './EthGasMonitorWidgetModules/EthGasFeesMarketSentiment';

// Icons & Graphics
import IconArrowRefresh from '../assets/IconArrowRefresh';
import IconWindowBarBackground from '../assets/IconWindowBarBackground';
import BarBackground from '../assets/BarBackground';

const WidgetEthGasMonitor = () => {
  return(
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

        <h2 className="window-title">Ethereum Gas Fee Monitor</h2>
        <a href="#"><IconArrowRefresh /></a>
      </div>

      <div className="window-contents">

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
