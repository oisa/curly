import IconButtonRemove from '../../assets/IconButtonRemove';
import IconButtonAdd from '../../assets/IconButtonAdd';
import IconButtonPointingHand from '../../assets/IconButtonPointingHand';
import IconBomb from '../../assets/IconBomb';
import IconTick from '../../assets/IconTick';

const ModuleWallets = () => {
  return (
    <div className="wallets-container module">

      <h3 className="generic-title">Wallet Importer</h3>

      <div className="wallet-search-container">
        <input type="field" placeholder="0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B"></input>
        <button><IconButtonPointingHand /></button>
      </div>

      <h4>Imported</h4>

      <div className="wallets-imported-container">

        <table className="wallets-imported-table">

          <tr>
            <th></th>
            <th></th>
          </tr>

          <tr>
            <td>0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B</td>
            <td><IconTick /></td>
            <td><IconButtonRemove /></td>
          </tr>

          <tr>
            <td>0xf2f2h1a7D398351b8bE11C439e05C5f3f59cyH24</td>
            <td><IconBomb /></td>
            <td><IconButtonRemove /></td>
          </tr>

          <tr>
            <td>0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B</td>
            <td><IconTick /></td>
            <td><IconButtonRemove /></td>
          </tr>

          <tr>
            <td>0xf2f2h1a7D398351b8bE11C439e05C5f3f59cyH24</td>
            <td><IconBomb /></td>
            <td><IconButtonRemove /></td>
          </tr>

        </table>

      </div>

    </div>
  )
}

export default ModuleWallets;
