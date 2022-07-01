import React from 'react';
import "../css/Cart.css"

const PopUp = props => {
    const { setPopUp } = props 

    const closePopUp = () => {
        setPopUp(false);
        localStorage.clear();
    }

    return (
        <div className="PopUp">
            <div className="pu-content-container">
                <h1 style={{color: "#c57840"}}>Order sent!</h1>
                <p>Our team will start preparing your order in the shortest time!</p>
            </div>
            <div>
                <a href="/" className="pu-button" onClick={()=> closePopUp()}> Close </a>
            </div>
        </div>
    );
}

export default PopUp;