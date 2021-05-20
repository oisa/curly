import IconGrab from '../../assets/IconGrab';
import IconButtonRemove from '../../assets/IconButtonRemove';

const ModuleWatchList = () => {
  return (
    <div className="watch-list-container module-single" >

      <table className="wishlist-table">

        <tr>
          <th></th>
          <th></th>
          <th>Ticker</th>
          <th>Change</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th></th>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Ethereum</td>
          <td>ETH</td>
          <td>+5%</td>
          <td>$4,063</td>
          <td>$471,187,893,596</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Polkadot</td>
          <td>DOT</td>
          <td>+10%</td>
          <td>$37.65</td>
          <td>$37,137,523,342</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Kusama</td>
          <td>KSM</td>
          <td>+19%</td>
          <td>$414.03</td>
          <td>$3,421,583,952</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Bridge Mutal</td>
          <td>BMI</td>
          <td>-3%</td>
          <td>$1.71</td>
          <td>$89,325,850</td>
          <td><IconButtonRemove /></td>
        </tr>

      </table>

    </div>
  )
}

export default ModuleWatchList;
