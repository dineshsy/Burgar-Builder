import React, { Component } from 'react'

import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import CheckoutSummary from '../../components/CheckoutSummary/ChekoutSummary'
 
class Checkout extends Component {

    state = {
        ingredients: null,
        price : null
    }

    UNSAFE_componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        // console.log(query.entries());
        const ingredients = {};
        for(let param of     query){
            // console.log(param)
            if (param[0] === 'price') this.setState({price : param[1]});
            else ingredients[param[0]] = +param[1];
        }
        // console.log(ingredients)    
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

        <Route path={this.props.match.path + '/contact-data'} render={(props) => <ContactData price={this.state.price} ingredients={this.state.ingredients} {...props}/>}/>
            </React.Fragment>
        )
    }
}

export default Checkout;