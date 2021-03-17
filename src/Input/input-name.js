import React from "react";

function Input(props) {
    return (
        <div className="field-wrap">
            <label>
                { props.title }<span className={props.className}>*</span>
            </label>
            <input type={ props.type } required autoComplete="off" />
        </div>
    );
}

export default Input;