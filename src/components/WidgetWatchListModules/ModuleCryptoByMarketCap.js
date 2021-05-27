import React, { useState, useEffect } from 'react';
import axios from 'axios';
import numbro from 'numbro';

import IconGrab from '../../assets/IconGrab';
import IconButtonRemove from '../../assets/IconButtonRemove';
import IconButtonAdd from '../../assets/IconButtonAdd';

const ModuleCryptoByMarketCap = () => {

  const [coinsFeed, setCoinsFeed] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((response) => {
      setCoinsFeed(response.data);
    });
  }

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

          { coinsFeed.map((item, i) => (
          <tr>
            <td>{ item.name }</td>
            <td>{ item.symbol.toUpperCase() }</td>
            <td>${ numbro(item.current_price).format({thousandSeparated: true}) }</td>
            <td>${ numbro(item.market_cap).format({thousandSeparated: true}) }</td>
            <td><IconButtonAdd /></td>
          </tr>
          )) }

      </table>

    </div>
  )
}

export default ModuleCryptoByMarketCap;
