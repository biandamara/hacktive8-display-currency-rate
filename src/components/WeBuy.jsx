import React from "react";

function WeBuy(value) {
  return <td>{parseFloat(value.rate * (100 * 0.05)).toFixed(4)}</td>;
}

export default WeBuy;
