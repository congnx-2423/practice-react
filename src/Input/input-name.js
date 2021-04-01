import React from "react";

function Input(props) {
    return (
        <div className="field-wrap">
            <label>
                { props.title }<span className={props.className}>*</span>
            </label>
            <input type={props.type} name={props.name} 
            	required 
            	autoComplete="off" 
            	value={props.value}
            	onChange={props.onChange}
        	/>
        </div>
    );
}

export default Input;