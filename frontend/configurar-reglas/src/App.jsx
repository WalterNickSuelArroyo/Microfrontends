import React from "react";
import ReactDOM from "react-dom";
import RulesTable from "./RulesTable";
import Footer from "./components/Footer";
import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <RulesTable />
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
