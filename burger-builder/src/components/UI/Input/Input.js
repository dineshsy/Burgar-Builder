import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
    let inputElement;
    let inputClasses = [classes.InputElement];
    if(props.invalid && props.shouldValidate && props.touched) {
        // console.log('invalid')
        inputClasses.push(classes.Invalid)
    }
    switch (props.elementType) {
        case "input":
            // console.log(...props.elementConfig);

            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                />
            );
            break;
        case "textarea":
            inputElement = (
                <textarea
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                ></textarea>
            );
            break;
        case "select":
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.option.map((el) => (
                        <option key={el.value} value={el.value}>
                            {el.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            // console.log('hi [def ault]')
            inputElement = (
                <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                />
            );
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.placeholder}</label>
            {inputElement}
        </div>
    );
};

export default input;
