import React from 'react';
import classes from './CheckoutSummary.module.css'
import Burger from '../Burger/Burger'
import Button from '../UI/Button/Button'

const checkoutSummary = props => {
    return (
        <div className={classes.Checkout}>
            <h1>We hope it tastes well!!</h1>        
            <div className={classes["Burger"]}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button btnType = "Danger" clicked={props.cancelHandler}> Cancel </Button>
            <Button btnType = "Success" clicked={props.continueHandler}> Checkout! </Button>
        </div>
    )
}

export default checkoutSummary;