import React, { useEffect, useState } from "react";
import fatchAPI from "../utils/api";

// components
import Currency from "./Currency";
import ExchangeRate from "./ExchangeRate";
import WeBuy from "./WeBuy";
import WeSell from "./WeSell";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fatchAPI()
      .then((res) => {
        setData(res.data.rates);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Currency</th>
          <th scope="col">Exchange Rate</th>
          <th scope="col">We Buy</th>
          <th scope="col">We Sell</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(data).map((currency) => (
          <tr key={currency}>
            <Currency currency={currency} />
            <ExchangeRate rate={data[currency]} />
            <WeBuy rate={data[currency]} />
            <WeSell rate={data[currency]} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
