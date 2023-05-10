import React from "react";

// components
import Header from "./components/Header";
import Table from "./components/Table";
import Footer from "./components/Footer";

// styles
import "./App.css";

function App() {
  return (
    <div id="app">
      {/* header - start */}
      <div id="header">
        <Header />
      </div>
      {/* header - end */}

      {/* section - start */}
      <div id="table">
        <Table />
      </div>
      {/* section - end */}

      {/* footer - start */}
      <div id="footer">
        <Footer />
      </div>
      {/* footer - end */}
    </div>
  );
}

export default App;
