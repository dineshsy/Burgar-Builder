import React from "react";

import classes from "./Order.module.css";

const order = (props) => {
    const ingredients = props.ingredients;
    const ingredientsParsed = [];
    for (let item in ingredients) {
        ingredientsParsed.push({
            name: item,
            count: ingredients[item],
        });
    }

    const ingredientsOutput = ingredientsParsed.map((ingredient) => {
        return (
            <span
            key={ingredient.name}
            style = {{
                margin: '0 8px',
                padding: '3px',
                display: 'inline-boxing',
                border: '1px solid #ccc',
                textTransform: 'capitalize',
                boxSizing: 'border-box',
                borderRadius: '20px',
                boxShadow: '1px 2px 3px rgba(0,0,0,.3)'
            }}>
                {ingredient.name} ({ingredient.count})
            </span>
        );
    });
    return (
        <div className={classes.Order}>
            <p>Igredients : {ingredientsOutput}</p>
            <p>
                Price : <strong>INR {props.price}</strong>
            </p>
        </div>
    );
};

export default order;
