import IconCurly from '../assets/IconCurly';
import IconArrowDropdown from '../assets/IconArrowDropdown';

const Header = () => {

  let currentTimeAndDate = Date();

  return(
    <header>
      <div className="center-container">

        <div className="logo">
          <IconCurly />
          <h1>Curly</h1>
        </div>

        <div className="header-time">
          <p>{currentTimeAndDate}</p>
        </div>

        <div className="currency-section">

          <div className="currency-selection">
            <p>Primary Currency: </p>
            <select>
              <option value="USD">$ USD</option>
              <option value="AUD">$ AUD</option>
              <option value="BTC">₿ BTC</option>
              <option value="ETH">Ξ ETH</option>
            </select>
          </div>

          <div className="currency-selection">
            <p>Secondary Currency:</p>
            <select>
              <option value="ETH">Ξ ETH</option>
              <option value="BTC">₿ BTC</option>
              <option value="USD">$ USD</option>
              <option value="AUD">$ AUD</option>
            </select>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;
