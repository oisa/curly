import IconSlowTurtle from '../../assets/IconSlowTurtle';
import IconFastHare from '../../assets/IconFastHare';

const EthGasFeesFeed = () => {
  return (
    <div className="eth-gas-fees-feed-container module">

      <div className="eth-gas-fees-feed-low">
        <h3><IconSlowTurtle />Low</h3>
        <div className="eth-gas-fees-feed-gwei-value">
          224
        </div>
        <div className="eth-gas-fees-feed-eth-value">
          Ξ 0.009
        </div>
        <div className="eth-gas-fees-feed-primary-currency-value">
          USD $18.35
        </div>
        <div className="eth-gas-fees-feed-transfer-duration">
          ~ 6 min, 15s
        </div>
      </div>

      <div className="eth-gas-fees-feed-average">
        <h3>Average</h3>
        <div className="eth-gas-fees-feed-gwei-value">
          224
        </div>
        <div className="eth-gas-fees-feed-eth-value">
          Ξ 0.009
        </div>
        <div className="eth-gas-fees-feed-primary-currency-value">
          USD $18.35
        </div>
        <div className="eth-gas-fees-feed-transfer-duration">
          ~ 6 min, 15s
        </div>
      </div>

      <div className="eth-gas-fees-feed-high">
        <h3>High<IconFastHare /></h3>
        <div className="eth-gas-fees-feed-gwei-value">
          224
        </div>
        <div className="eth-gas-fees-feed-eth-value">
          Ξ 0.009
        </div>
        <div className="eth-gas-fees-feed-primary-currency-value">
          USD $18.35
        </div>
        <div className="eth-gas-fees-feed-transfer-duration">
          ~ 6 min, 15s
        </div>
      </div>

    </div>
  )
}

export default EthGasFeesFeed;
