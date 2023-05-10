import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="d-flex gap-2">
        <img
          className="logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.acronis.com%2Fsites%2Fdefault%2Ffiles%2F2018-04%2Facronis_notary_cloud_logo%25402x.png&f=1&nofb=1&ipt=5909232bacd7609c1b6031f8612e9a0ca12fbccb51185560cbd34038faa928b3&ipo=images"
          alt="Logo"
        />
        <h1>Currency Rate</h1>
      </div>
    </header>
  );
}

export default Header;
