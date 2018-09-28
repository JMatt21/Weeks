import React from "react";

const Math = props => {
    let ret = 0;
    switch (props.operator) {
        case '+': {
            ret = props.num1 + props.num2;
        }
            break;
        case '-': {
            ret = props.num1 - props.num2;
        }
            break;
        case '*': {
            ret = props.num1 * props.num2;
        }
            break;
        case '/': {
            ret = props.num1 / props.num2;
        }
            break;
        default: {
            return <div>Invalid Operator: {props.operator}</div>
        }
    }
    return <div> {props.num1} {props.operator} {props.num2} =
                <span style={{ fontSize: ret }}>
                    {ret}
                </span>
            </div>;
};

export default Math;