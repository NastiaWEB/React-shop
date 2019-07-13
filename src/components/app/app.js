import React from "react";
import Header from "../header";
import { HomePage, CartPage } from "../pages";
import MainProduct from "../main-product";
import { Route, Switch } from "react-router-dom";
import SortPanel from "../sort-panel";
import { withRoute } from "../hoc";

const App = () => {
  return (
    <div>
      <Header />
      <SortPanel />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/cart" component={CartPage} />
        <Route path="/product" component={MainProduct} />
      </Switch>
    </div>
  );
};

export default withRoute(App);
