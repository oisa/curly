import IconGrab from '../../assets/IconGrab';
import IconButtonRemove from '../../assets/IconButtonRemove';
import IconButtonAdd from '../../assets/IconButtonAdd';

const ModulePortfolio = () => {
  return (
    <div className="portfolio-container module-single" >

      <table className="portfolio-table">

        <tr>
          <th></th>
          <th></th>
          <th></th>
          <th>Amount</th>
          <th>Avg. Buy</th>
          <th>Cost</th>
          <th>Cur. Price</th>
          <th>Cur. Value</th>
          <th></th>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Bitcoin</td>
          <td>BTC</td>
          <td>2</td>
          <td>$21,539</td>
          <td>$43,178</td>
          <td>$38,543</td>
          <td>$77,186</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Ethereum</td>
          <td>ETH</td>
          <td>11</td>
          <td>$432</td>
          <td>$4864</td>
          <td>$4,063</td>
          <td>$44,693</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Polkadot</td>
          <td>DOT</td>
          <td>900</td>
          <td>$4</td>
          <td>$3,600</td>
          <td>$37.65</td>
          <td>$33,885</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Cardano</td>
          <td>ADA</td>
          <td>43,000</td>
          <td>$0.12</td>
          <td>$5,952</td>
          <td>$1.82</td>
          <td>$78,260</td>
          <td><IconButtonRemove /></td>
        </tr>

        <tr>
          <td><IconGrab /></td>
          <td>Bridge Mutal</td>
          <td>BMI</td>
          <td>22,721</td>
          <td>$1.60</td>
          <td>$20,321</td>
          <td>$0.99</td>
          <td>$20,224</td>
          <td><IconButtonRemove /></td>
        </tr>

      </table>

    </div>
  )
}

export default ModulePortfolio;
