import React from 'react';
import Layout from './hoc/Layouts/Layouts'
import { Route, Switch } from "react-router-dom";
import BurgerBuilder from './containers/Burger Builder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'

function App() {
  return (
      <Layout>
          <Switch>
              <Route path="/checkout"  component={Checkout} />
              <Route path="/" exact component={BurgerBuilder} />
          </Switch>
      </Layout>
  );
}

export default App;
