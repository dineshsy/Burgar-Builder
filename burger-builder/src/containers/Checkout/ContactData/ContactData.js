import React, { Component } from "react";
import classes from "./ContactData.module.css";
import axios from "../../../axios-order";

import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name",
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your E-Mail",
                    required: true,
                },
                validation: {
                    required: true,
                },
                value: "",
                valid: false,
                touched: false,
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street",
                },
                validation: {
                    required: true,
                },
                value: "",
                valid: false,
                touched: false,
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ZIP Code",
                },
                validation: {
                    required: true,
                    minLength: 5,
                },
                value: "",
                valid: false,
                touched: false,
            },
            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Country",
                },
                validation: {
                    required: true,
                },
                value: "",
                valid: false,
                touched: false,
            },
            delivaryMethod: {
                elementType: "select",
                elementConfig: {
                    option: [
                        { value: "fastest", displayValue: "Fastest" },
                        { value: "cheapest", displayValue: "Cheapest" },
                    ],
                },
                value: "Fastest",
                valid : true
            },
        },
        formIsValid : false,
        loading: false,
    };

    checkValid(value, rules) {
        let isValid = false;
        if (rules && rules.required) {
            isValid = value.trim() !== "";
        }
        if (rules && rules.minLength) {
            isValid = isValid && value.trim().length >= rules.minLength;
        }

        return isValid;
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({ loading: true });
        const formData = {};
        for (let element in this.state.orderForm) {
            formData[element] = this.state.orderForm[element].value;
        }

        axios
            .post("/order.json", formData)
            .then((Response) => {
                //   console.log(Response   )
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch((error) => {
                this.setState({ loading: false });
            });
    };

    changeHandler = (event, identifierElement) => {
        const updatedOrderForm = {
            ...this.state.orderForm,
        };
        const updatedOrderFormElemnt = {
            ...updatedOrderForm[identifierElement],
        };

        updatedOrderFormElemnt.value = event.target.value;
        updatedOrderFormElemnt.valid = this.checkValid(
            updatedOrderFormElemnt.value,
            updatedOrderFormElemnt.validation
        );

       
        updatedOrderFormElemnt.touched = true;
        updatedOrderForm[identifierElement] = updatedOrderFormElemnt;
         let formIsValid = true;
         for (let key in updatedOrderForm) {
             formIsValid = updatedOrderForm[key].valid && formIsValid;
         }
        //  console.log(formIsValid)
        this.setState({ orderForm: updatedOrderForm, formIsValid: formIsValid });
        // console.log(this.state.orderForm)
    };

    render() {
        const formElements = [];
        for (let key in this.state.orderForm) {
            formElements.push({
                id: key,
                config: this.state.orderForm[key],
            });
        }
        let form = (
            <form onSubmit={this.orderHandler}>
                {formElements.map((formElement) => {
                    return (
                        <Input
                            key={formElement.id}
                            changed={(event) =>
                                this.changeHandler(event, formElement.id)
                            }
                            elementType={formElement.config.elementType}
                            elementConfig={formElement.config.elementConfig}
                            vlaue={formElement.config.value}
                            shouldValidate={formElement.config.validation}
                            invalid={!formElement.config.valid}
                            touched={formElement.config.touched}
                        />
                    );
                })}
                <Button disabled={!this.state.formIsValid} btnType="Success">ORDER</Button>
            </form>
        );

        if (this.state.loading) form = <Spinner />;
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
