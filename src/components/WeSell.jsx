import React from "react";

function WeSell(value) {
  return <td>{parseFloat(value.rate * (100 * 0.05)).toFixed(4)}</td>;
}

export default WeSell;
