const EthGasFeesExchangePrices = () => {
  return (
    <div className="eth-gas-fees-exchange-prices-container module">
      <h3 className="eth-gas-fees-exchange-prices-title">
        Exchange Prices
      </h3>

      <table className="eth-gas-fees-table">

        <tr>
          <th></th>
          <th>Low</th>
          <th>Average</th>
          <th>High</th>
        </tr>

        <tr>
          <td>ERC20 Transfer</td>
          <td>$56.79</td>
          <td>$61.86</td>
          <td>$68.96</td>
        </tr>

        <tr>
          <td>Uniswap V2</td>
          <td>$174.75</td>
          <td>$190.35</td>
          <td>$212.19</td>
        </tr>

        <tr>
          <td>Uniswap V3</td>
          <td>$80.99</td>
          <td>$90.32</td>
          <td>$109.21</td>
        </tr>

        <tr>
          <td>MetaMask Swap</td>
          <td>$152.90</td>
          <td>$166.55</td>
          <td>$185.67</td>
        </tr>

      </table>

    </div>
  );
}

export default EthGasFeesExchangePrices;
