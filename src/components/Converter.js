import React, { useState } from "react";

const Converter = (props) => {
  const [courseBTN_USD, setCourseBTN_USD] = useState(
    props.BTC?.market_data?.current_price?.usd
  );
  const [courseBTN_ETH, setCourseBTN_ETH] = useState(
    props.BTC?.market_data?.current_price?.eth
  );
  const [courseETH_BTN, setCourseETH_BTN] = useState(
    props.ETH?.market_data?.current_price?.btc
  );
  const [courseETH_USD, setCourseETH_USD] = useState(
    props.ETH?.market_data?.current_price?.usd
  );

  setTimeout(() => {
    setCourseBTN_USD(props.BTC?.market_data?.current_price?.usd);
    setCourseBTN_ETH(props.BTC?.market_data?.current_price?.eth);
    setCourseETH_BTN(props.ETH?.market_data?.current_price?.btc);
    setCourseETH_USD(props.ETH?.market_data?.current_price?.usd);
    setCourseBTN({
      USD: courseBTN_USD,
      ETH: courseBTN_ETH,
      BTC: 1,
    });
    setCourseETH({
      USD: courseETH_USD,
      ETH: 1,
      BTC: courseETH_BTN,
    });
    setCourseUSD({
      USD: 1,
      ETH: 1 / courseETH.USD,
      BTC: 1 / courseBTC.USD,
    });
  }, 1);

  const [courseBTC, setCourseBTN] = useState({
    USD: courseBTN_USD,
    ETH: courseBTN_ETH,
    BTC: 1,
  });
  const [courseETH, setCourseETH] = useState({
    USD: courseETH_USD,
    ETH: 1,
    BTC: courseETH_BTN,
  });
  const [courseUSD, setCourseUSD] = useState({
    USD: 1,
    ETH: 1 / courseETH.USD,
    BTC: 1 / courseBTC.USD,
  });

  const menu1 = document.querySelector("#Converter__first_list")?.value;
  const menu2 = document.querySelector("#Converter__second_list")?.value;
  var choise = courseBTC;
  var result_choise = courseBTC.USD;

  if (menu1 === "BTC") {
    choise = courseBTC;
  }
  if (menu1 === "ETH") {
    choise = courseETH;
  }
  if (menu1 === "USD") {
    choise = courseUSD;
  }
  if (menu2 === "USD") {
    result_choise = choise.USD;
  }
  if (menu2 === "ETH") {
    result_choise = choise.ETH;
  }
  if (menu2 === "BTC") {
    result_choise = choise.BTC;
  }

  const [value, setValue] = useState(1);
  const [result, setResult] = useState(value * result_choise);

  const change = (e) => {
    setValue(e.target.value);
    setResult(value * result_choise);
  };

  setTimeout(() => {
    setResult(value * result_choise);
  }, 1);

  return (
    <div className="Converter">
      <div className="container">
        <input
          type="number"
          value={value}
          onInput={change}
          className="Converter__first_input"
        />
        <br />
        <select name="first_list" id="Converter__first_list">
          <option value="BTC">bitcoin</option>
          <option value="ETH">ethereum</option>
          <option value="USD">dollar us</option>
        </select>
        <input
          type="number"
          value={result}
          disabled="disabled"
          className="Converter__second_input"
        />
        <br />
        <select name="second_list" id="Converter__second_list">
          <option value="USD">dollar us</option>
          <option value="ETH">ethereum</option>
          <option value="BTC">bitcoin</option>
        </select>
      </div>
    </div>
  );
};

export default Converter;
