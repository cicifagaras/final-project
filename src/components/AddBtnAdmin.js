import React from 'react'
import PropTypes from 'prop-types'

const AddBtnAdmin = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} style={{backgroundColor:color}}
        className="addBtn">
            {text}
        </button>
    )
}

AddBtnAdmin.defaultProps = {
    color: "blue"
}

AddBtnAdmin.prototype = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


export default AddBtnAdmin
