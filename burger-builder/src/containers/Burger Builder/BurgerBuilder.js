import React, { Component } from "react";
import axios from "../../axios-order";

import Spinner from "../../components/UI/Spinner/Spinner";
import Aux from "../../hoc/Auxilary/Auxilary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENTS_PRICE = {
  cheese: 30,
  bacon: 25,
  salad: 60,
  meat: 70
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      cheese: 0,
      bacon: 0,
      salad: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    purchasing: false,
    loading: false
  };

  updatePurchaseHandler(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchaseable: sum > 0 });
  }

  addIngredientsHandler = type => {
    const updatedCount = this.state.ingredients[type] + 1;
    const updatedIgredients = {
      ...this.state.ingredients
    };
    updatedIgredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIgredients,
      totalPrice: updatedPrice
    });

    this.updatePurchaseHandler(updatedIgredients);
  };
  removeIngredientsHandler = type => {
    var updatedCount = this.state.ingredients[type] - 1;
    if (updatedCount < 0) {
      return;
    }
    const updatedIgredients = {
      ...this.state.ingredients
    };

    updatedIgredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
    this.setState({
      ingredients: updatedIgredients,
      totalPrice: updatedPrice
    });
    this.updatePurchaseHandler(updatedIgredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Dinesh"
      }
    };

    axios
      .post("/order.json", order)
      .then(Response => {
        console.log(Response);
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => console.log(error));
  };
  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (var key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredients={this.state.ingredients}
        cancel={this.purchaseCancelHandler}
        continue={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    );

    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          popModal={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          addIngredient={this.addIngredientsHandler}
          removeIngredient={this.removeIngredientsHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
          purchase={this.state.purchaseable}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
