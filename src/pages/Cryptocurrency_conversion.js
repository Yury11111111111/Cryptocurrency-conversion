import React, {useEffect, useState} from "react";
import Converter from "../components/Converter";
import Сryptocurrency from "../components/Сryptocurrency";

const Cryptocurrency_conversion = () => {
  const [BTC, setBTC] = useState({});
  const [ETH, setETH] = useState({});

  useEffect(() => {
    BTCresponseFun();
    ETHresponseFun();
  });

  const BTCresponseFun = () => {
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((response) => response.json())
      .then((date) => setBTC(date));
  };

  const ETHresponseFun = () => {
    fetch("https://api.coingecko.com/api/v3/coins/ethereum")
      .then((response) => response.json())
      .then((date) => setETH(date));
  };

  
  return (
    <div>
      <div className="course">
        <div className="container">
          <Сryptocurrency cryptocurrency={BTC} className="BTN" />
          <Сryptocurrency cryptocurrency={ETH} className="ETH" />
        </div>
      </div>
      <Converter BTC={BTC} ETH={ETH} />
    </div>
  );
};

export default Cryptocurrency_conversion;
