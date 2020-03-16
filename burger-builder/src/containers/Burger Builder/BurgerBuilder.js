import React, { Component } from "react";
import Aux from "../../hoc/Auxilary";
import Burger from '../../components/Burger/Burger'
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENTS_PRICE = {
    cheese: 30,
    bacon: 25,
    salad: 60,
    meat: 70
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            bacon: 0,
            salad: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false
    }

    updatePurchaseHandler(ingredients) {
        const sum = Object.keys(ingredients).map(
            igKey => {
                return ingredients[igKey]
            }
        ).reduce((sum, el) => {
            return sum + el;
        }, 0)
        this.setState({ purchaseable: sum > 0 });
    }

    addIngredientsHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIgredients = {
            ...this.state.ingredients
        }
        updatedIgredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updatedIgredients,
            totalPrice: updatedPrice
        })

        this.updatePurchaseHandler(updatedIgredients);

    }
    removeIngredientsHandler = (type) => {

        var updatedCount = this.state.ingredients[type] - 1;
        if (updatedCount < 0) {
            return;
        }
        const updatedIgredients = {
            ...this.state.ingredients
        }

        updatedIgredients[type] = updatedCount;
        const updatedPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
        this.setState({
            ingredients: updatedIgredients,
            totalPrice: updatedPrice
        })
        this.updatePurchaseHandler(updatedIgredients);


    }


    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for (var key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls addIngredient={this.addIngredientsHandler}
                    removeIngredient={this.removeIngredientsHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchase={this.state.purchaseable} />
            </Aux>
        )
    }
}

export default BurgerBuilder;