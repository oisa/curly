const EthGasFeesTopGuzzlers = () => {
  return (
    <div className="eth-gas-fees-top-guzzlers-container module">
      <h3 className="generic-title">
        Top Guzzlers
      </h3>

      <table className="responsive-table">

        <tr>
          <th></th>
          <th>Last 24hrs</th>
        </tr>

        <tr>
          <td>Uniswap V2</td>
          <td>$3,897,193.02</td>
        </tr>

        <tr>
          <td>Tether USDT</td>
          <td>$1,345,822.02</td>
        </tr>

        <tr>
          <td>Uniswap V3</td>
          <td>$695,633</td>
        </tr>

      </table>

    </div>
  )
}

export default EthGasFeesTopGuzzlers;
