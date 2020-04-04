import  React  from "react";
import Aux from "../../../hoc/Auxilary/Auxilary";
import Button from '../../UI/Button/Button'
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
      <h3 style={{margin : "10px auto"}}>Your Order</h3>
      <p>Your delecious order with following ingredients</p>
      <ul>{ingredientSummary}</ul>
  <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
      <p style={{margin: "0px"}}>Proceed to checkout?</p>
      <div
      style={{display : "flex", justifyContent: "space-around", width:"100%"}}>
         <Button btnType={"Danger"} clicked = {props.cancel}>CANCEL</Button>
      <Button btnType={"Success"} clicked = {props.continue}>CONTINUE</Button>
      </div>
     </Aux>
  );
};

export default orderSummary;
