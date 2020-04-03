import React, { Component } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/ChekoutSummary'
 
class Checkout extends Component {

    state = {
        ingredients: {
            meat: 2,
            bacon: 1,
            cheese: 2,
            salad: 1
        }
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        // console.log(query.entries());
        const ingredients = {};
        for(let param of     query){
            // console.log(param)
            ingredients[param[0]] = +param[1];
        }
        console.log(ingredients)    
        this.setState({ingredients : ingredients});
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }
    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                <CheckoutSummary 
                ingredients = {this.state.ingredients}
                cancelHandler = {this.checkoutCancelHandler}
                continueHandler = {this.checkoutContinueHandler}
                />
            </React.Fragment>
        )
    }
}

export default Checkout;