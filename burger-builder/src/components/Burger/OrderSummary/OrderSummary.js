import  React  from "react";
import Aux from "../../../hoc/Auxilary";

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{textTransform : "capitalize"}}>{igKey} </span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your delecious order with following ingredients</p>
      <ul>{ingredientSummary}</ul>
      <p>Proceed to checkout?</p>
    </Aux>
  );
};

export default orderSummary;
