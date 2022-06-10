import React from "react";
import { useState, useEffect } from "react";
import "../styles/App.css";
import Chart_pie from "../components/Chart_pie";

const Briefcase = () => {
  const [changeBTC, setChangeBTC] = useState(0);
  const [changeETH, setChangeETH] = useState(0);
  const [bitcoin, setBitcoin] = useState(() => {
    const saved = localStorage.getItem("bitcoin");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });
  const [ethereum, setEthereum] = useState(() => {
    const saved = localStorage.getItem("ethereum");
    const initialValue = JSON.parse(saved);
    return initialValue || 0;
  });

  const BTCresponseFun = () => {
    fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
      .then((response) => response.json())
      .then((date) => setBitcoinPrice(date.market_data?.current_price?.usd));
  };

  const ETHresponseFun = () => {
    fetch("https://api.coingecko.com/api/v3/coins/ethereum")
      .then((response) => response.json())
      .then((date) => setEthereumPrice(date.market_data?.current_price?.usd));
  };

  const [bitcoinPrice, setBitcoinPrice] = useState(0);
  const [ethereumPrice, setEthereumPrice] = useState(0);
  const [wholeСost, setWholeCost] = useState(
    bitcoinPrice * bitcoin + ethereumPrice * ethereum
  );
  useEffect(() => {
    BTCresponseFun();
    ETHresponseFun();
    setWholeCost(bitcoinPrice * bitcoin + ethereumPrice * ethereum);
    localStorage.setItem("bitcoin", JSON.stringify(bitcoin));
    localStorage.setItem("ethereum", JSON.stringify(ethereum));
  }, [bitcoin, ethereum, bitcoinPrice, ethereumPrice]);

  console.log(bitcoinPrice);

  function changeBTCFun(e) {
    setChangeBTC(e.target.value);
  }

  function change_ETHFun(e) {
    setChangeETH(e.target.value);
  }

  function plus_BTC() {
    setBitcoin(bitcoin + Number(changeBTC));
    setChangeBTC(0);
  }

  function minus_BTC() {
    setBitcoin(bitcoin - Number(changeBTC));
    setChangeBTC(0);
  }

  function plus_ETH() {
    setEthereum(ethereum + Number(changeETH));
    setChangeETH(0);
  }

  function minus_ETH() {
    setEthereum(ethereum - Number(changeETH));
    setChangeETH(0);
  }

  return (
    <div>
      <div className="container">
        <div className="Briefcase__head">
          <h1 className="Briefcase__bitcoin">
            <div className="">Bitcoin</div>
            <input
              type="number"
              min="0"
              onInput={changeBTCFun}
              value={changeBTC}
              className="Briefcase__changeBTC"
            />{" "}
            <br />
            <div className="Briefcase__buttons">
              <button onClick={plus_BTC} className="Briefcase__plus">
                +
              </button>
              <button onClick={minus_BTC} className="Briefcase__minus">
                -
              </button>
            </div>
            <div>{bitcoin}</div>
          </h1>
          <h1 className="Briefcase__ethereum">
            <div className="">Ethereum</div>
            <input
              type="number"
              min="0"
              onInput={change_ETHFun}
              value={changeETH}
              className="Briefcase__changeETH"
            />{" "}
            <br />
            <div className="Briefcase__buttons">
              <button onClick={plus_ETH} className="Briefcase__plus">
                +
              </button>
              <button onClick={minus_ETH} className="Briefcase__minus">
                -
              </button>
            </div>
            <div>{ethereum}</div>
          </h1>
        </div>
        <h2 className="Briefcase__wholeСost">Общая стоимость портфеля: {wholeСost} $</h2>
        <div className="Briefcase__chart">
          <Chart_pie bitcoin={bitcoin} ethereum={ethereum} />
        </div>
      </div>
    </div>
  );
};

export default Briefcase;
