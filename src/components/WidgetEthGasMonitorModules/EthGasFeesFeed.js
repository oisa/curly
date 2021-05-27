import React, { useState, useEffect } from 'react';
import axios from 'axios';

import IconSlowTurtle from '../../assets/IconSlowTurtle';
import IconFastHare from '../../assets/IconFastHare';

const EthGasFeesFeed = () => {

  // Gas fees
  const [lowEthGasGwei, setLowEthGasGwei] = useState(0);
  const [avgEthGasGwei, setAvgEthGasGwei] = useState(0);
  const [highEthGasGwei, setHighEthGasGwei] = useState(0);

  // Gas fee speeds
  const [lowEthGasSpeed, setLowEthGasSpeed] = useState(0);
  const [avgEthGasSpeed, setAvgEthGasSpeed] = useState(0);
  const [highEthGasSpeed, setHighEthGasSpeed] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios('https://ethgasstation.info/api/ethgasAPI.json?').then((response) => {
      setLowEthGasGwei(response.data.safeLow / 10);
      setAvgEthGasGwei(response.data.average / 10);
      setHighEthGasGwei(response.data.fast / 10);

      setLowEthGasSpeed(response.data.safeLowWait);
      setAvgEthGasSpeed(response.data.avgWait);
      setHighEthGasSpeed(response.data.fastWait);
    });
  }

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
          ~ { lowEthGasSpeed } min
        </div>
      </div>

      <div className="eth-gas-fees-feed-average">
        <h3>Average</h3>
        <div className="eth-gas-fees-feed-gwei-value">
          { avgEthGasGwei }
        </div>
        <div className="eth-gas-fees-feed-eth-value">
          Ξ { avgEthGasGwei / 10000000 }
        </div>
        <div className="eth-gas-fees-feed-primary-currency-value">
          $19.99
        </div>
        <div className="eth-gas-fees-feed-transfer-duration">
          ~ { avgEthGasSpeed } min
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
          ~ { highEthGasSpeed } min
        </div>
      </div>

    </div>
  )
}

export default EthGasFeesFeed;
