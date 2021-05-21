import IconGrab from '../../assets/IconGrab';
import IconButtonRemove from '../../assets/IconButtonRemove';
import IconButtonAdd from '../../assets/IconButtonAdd';

const ModuleWatchList = () => {
  return (
    <div className="watch-list-container module-single" >

      <table className="watch-list-table">

        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>Change</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th></th>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Bitcoin</td>
          <td>BTC</td>
          <td>-30%</td>
          <td>$38,543</td>
          <td>$709,312,325,850</td>
          <td><IconButtonRemove /></td>
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
          <td>Cardano</td>
          <td>ADA</td>
          <td>+19%</td>
          <td>$1.83</td>
          <td>$60,221,583,952</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Bridge Mutal</td>
          <td>BMI</td>
          <td>+2%</td>
          <td>$1.20</td>
          <td>$60,583,952</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Injective Protocol</td>
          <td>INJ</td>
          <td>+12%</td>
          <td>$12.36</td>
          <td>$238,583,952</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Ramp Defi</td>
          <td>RAMP</td>
          <td>-20%</td>
          <td>$0.29</td>
          <td>$70,583,952</td>
          <td><IconButtonRemove /></td>
        </tr>

      </table>

    </div>
  )
}

export default ModuleWatchList;
