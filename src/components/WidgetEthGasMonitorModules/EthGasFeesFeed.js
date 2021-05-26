import React, { useState, useEffect } from 'react';
import axios from 'axios';

import IconSlowTurtle from '../../assets/IconSlowTurtle';
import IconFastHare from '../../assets/IconFastHare';

const EthGasFeesFeed = () => {

  const [lowEthGasGwei, setLowEthGasGwei] = useState(0);
  const [stdEthGasGwei, setStdEthGasGwei] = useState(0);
  const [highEthGasGwei, setHighEthGasGwei] = useState(0);

  useEffect(() => {
      axios('https://www.gasnow.org/api/v3/gas/price?').then((response) => {
        console.log(response);
        setLowEthGasGwei(response.data.data.slow / 1000000000);
        setStdEthGasGwei(response.data.data.standard / 1000000000);
        setHighEthGasGwei(response.data.data.fast / 1000000000);
      });
    }
  );

    return (
      <div className="eth-gas-fees-feed-container module">

        <div className="eth-gas-fees-feed-low">
          <h3><IconSlowTurtle />Low</h3>
          <div className="eth-gas-fees-feed-gwei-value">
            { lowEthGasGwei }
          </div>
          <div className="eth-gas-fees-feed-eth-value">
            Ξ { lowEthGasGwei / 10000000 }
          </div>
          <div className="eth-gas-fees-feed-primary-currency-value">
            $18.35
          </div>
          <div className="eth-gas-fees-feed-transfer-duration">
            ~ 6 min, 15s
          </div>
        </div>

        <div className="eth-gas-fees-feed-average">
          <h3>Average</h3>
          <div className="eth-gas-fees-feed-gwei-value">
            { stdEthGasGwei }
          </div>
          <div className="eth-gas-fees-feed-eth-value">
            Ξ { stdEthGasGwei / 10000000 }
          </div>
          <div className="eth-gas-fees-feed-primary-currency-value">
            $19.99
          </div>
          <div className="eth-gas-fees-feed-transfer-duration">
            ~ 1 min, 20s
          </div>
        </div>

        <div className="eth-gas-fees-feed-high">
          <h3>High<IconFastHare /></h3>
          <div className="eth-gas-fees-feed-gwei-value">
            { highEthGasGwei }
          </div>
          <div className="eth-gas-fees-feed-eth-value">
            Ξ { highEthGasGwei / 10000000 }
          </div>
          <div className="eth-gas-fees-feed-primary-currency-value">
            $22.28
          </div>
          <div className="eth-gas-fees-feed-transfer-duration">
            ~ 0 min, 20s
          </div>
        </div>

      </div>
    )
}

export default EthGasFeesFeed;
