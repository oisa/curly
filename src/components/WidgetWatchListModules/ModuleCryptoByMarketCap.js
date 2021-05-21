import IconGrab from '../../assets/IconGrab';
import IconButtonRemove from '../../assets/IconButtonRemove';
import IconButtonAdd from '../../assets/IconButtonAdd';

const ModuleCryptoByMarketCap = () => {
  return (
    <div className="crypto-by-market-cap-container module" >

      <h3 className="generic-title">
        Crypto by Market Cap
      </h3>

      <table className="crypto-by-market-cap-table">

        <tr>
          <th></th>
          <th></th>
          <th>Price</th>
          <th>Market Cap</th>
          <th></th>
        </tr>

        <tr>
          <td>Bitcoin</td>
          <td>BTC</td>
          <td>$38,543</td>
          <td>$709,312,325,850</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td>Ethereum</td>
          <td>ETH</td>
          <td>$4,063</td>
          <td>$471,187,893,596</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td>Binance Coin</td>
          <td>BNB</td>
          <td>$330.52</td>
          <td>$51,421,583,952</td>
          <td><IconButtonAdd /></td>
        </tr>

        <tr>
          <td>Ripple</td>
          <td>XRP</td>
          <td>$1.07</td>
          <td>$49,421,583,952</td>
          <td><IconButtonAdd /></td>
        </tr>

      </table>

    </div>
  )
}

export default ModuleCryptoByMarketCap;
