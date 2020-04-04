import React from 'react';

import classes from "./Order.module.css";

const order = () => {
    return (
        <div className={classes.Order}>
            <p>Igredients : Salad(1)</p>
            <p>
                Price <strong>INR 55</strong>
            </p>
        </div>
    );
}

export default order;