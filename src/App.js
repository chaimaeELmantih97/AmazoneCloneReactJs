import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* what er render */}
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            {/* what er render */}
            <h1>login page</h1>
          </Route>
          <Route path="/">
            {/* what er render */}
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
