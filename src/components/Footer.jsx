import React from "react";

function Footer() {
  const base = process.env.REACT_APP_BASE;

  return (
    <footer className="footer">
      <p>Rates are based from 1 {base}</p>
      <p>
        This application uses API from{" "}
        <a href="https://currencyfreaks.com/">Currency Freaks</a>
      </p>
    </footer>
  );
}

export default Footer;
