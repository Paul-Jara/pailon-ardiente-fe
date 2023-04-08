import React from "react"

const FormInput = ({ labelText, name, type, isRequired, handlerChange, autoComplete, placeholder }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {labelText}:
            </label>
            <input
                id={name}
                name={name}
                type={type}
                required={isRequired}
                onChange={(e) => handlerChange(e)}
                autoComplete={autoComplete}
                placeholder={placeholder}
                className="form-control"
            />
        </div>
    )
}

export default FormInput