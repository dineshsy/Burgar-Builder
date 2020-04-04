import React, { Component } from "react";
import classes from "./ContactData.module.css";
import axios from '../../../axios-order'

import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from "../../../components/UI/Button/Button";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: "",
        },
        loading: false
    };

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const order = {
          ingredients: this.props.ingredients,
          price: this.props.price,
          customer: {
            name: "Dinesh"
          }
        };

        axios
          .post("/order.json", order)
          .then(Response => {
            //   console.log(Response   )
            this.setState({ loading: false});
            this.props.history.push('/');
          })
          .catch(error => {
            this.setState({ loading: false});
          });
    };

    render() {

        let form = (
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    htmlFor="name"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    htmlFor="email"
                    required
                />
                <input type="text" name="street" placeholder="Street Name" />
                <input type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>
                    ORDER
                </Button>
            </form>
        );

        if(this.state.loading) form = <Spinner/>
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
