import React from 'react'
import  PropTypes  from "prop-types";
import AddBtnAdmin from "./AddBtnAdmin";

const HeaderAdm = ({title, onAdd, showAdd}) => {

    return (
        <header className="header">
            <h1>{title}</h1>
                <AddBtnAdmin 
                color={showAdd ? "#C57840" : "#5F87C9"} 
                text={showAdd ? "Close form" : "Show Form"} 
                onClick={onAdd}
                />
        </header>
    )
}

HeaderAdm.defaultProps = {
    title: "Inventory"
}

HeaderAdm.prototype = {
    title: PropTypes.string.isRequired
}

export default HeaderAdm
