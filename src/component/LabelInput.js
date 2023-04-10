import React from "react"

const LabelInput = ({ labelText, type, setter, defaultValue, name, autoComplete, placeholder, readOnly }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {labelText}:
            </label>
            <input
                onChange={(e) => setter(e.target.value)}
                defaultValue={defaultValue}
                type={type}
                name={name}
                id={name}
                autoComplete={autoComplete}
                placeholder={placeholder} 
                readOnly={readOnly === "true"}
                className="form-control"
            />
        </div>
    )
}

export default LabelInput