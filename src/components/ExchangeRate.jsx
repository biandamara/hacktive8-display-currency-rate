import React from "react";

function ExchangeRate(value) {
  return <td>{parseFloat(value.rate).toFixed(4)}</td>;
}

export default ExchangeRate;
