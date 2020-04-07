import React, { Component } from "react";
import axios from "../../axios-order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
    state = {
        loading: false,
        error: false,
        orders: [],
    };
    componentDidMount() {
        this.setState({ loading: true });
        axios
            .get("/order.json")
            .then((res) => {
                const fetchedOrders = [];
                for (var i in res.data) {
                    fetchedOrders.push({
                        ...res.data[i],
                        id: i,
                    });
                }
                // console.log(fetchedOrders);
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch((err) => {
                this.setState({ loading: false, error: true });
            });
    }

    render() {
        var order = (
            <div>
                {this.state.orders.map((order) => (
                    <Order 
                    ingredients={order.ingredients}
                    price={+order.price}
                    key={order.id} />
                ))}
            </div>
        );

        if (this.state.loading) {
            order = <Spinner />;
        }
        if (this.state.error) order = <p>Please refresh the page</p>;
        return order;
    }
}

export default withErrorHandler(Orders, axios);
