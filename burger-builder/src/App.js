import React from 'react';
import Layout from './hoc/Layouts/Layouts'
import { Route, Switch } from "react-router-dom";

import Orders from './containers/Orders/Orders';
import BurgerBuilder from './containers/Burger Builder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout'

function App() {
  return (
      <Layout>
          <Switch>
              <Route path="/checkout"  component={Checkout} />
              <Route path='/orders' component={Orders}/>
              <Route path="/" exact component={BurgerBuilder} />
          </Switch>
      </Layout>
  );
}

export default App;
