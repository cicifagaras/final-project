import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi';
import "../css/General.css"
import "../css/Cart.css"
import Logo from './Logo';
import NavBar from './NavBar';
import PopUp from './PopUp';


const CartPage = () => {
    const url = "https://winter-sports-ac114-default-rtdb.europe-west1.firebasedatabase.app/"
    
    const userCart = JSON.parse(localStorage.getItem("cart"));
    

    const setKey = (item) => {
        localStorage.setItem("KeyProduct", item.key)
    }
    
    const priceQty = (item) => {
        const price = item.price * item.addedQuantity;
        return parseFloat(price).toFixed(2);
    }

    const orderSubtotal = () => {
        let subtotal = 0;
        userCart.map((item) => {
            subtotal = subtotal + (item.price * item.addedQuantity);
        })
        return parseFloat(subtotal).toFixed(2);
    }

    const shipping = 10;

    const total = () => {
        const totalSum = orderSubtotal() + shipping;
        return parseFloat(totalSum).toFixed(2);
    }
    const removeItem = (i) => {
        if (window.confirm("Are you sure you want to delete he product?")) {
            userCart.splice(i, 1)   
            localStorage.setItem("cart", JSON.stringify(userCart))
        }
    }
    
    const handleIncrement = (i) => {
        if (userCart[i].addedQuantity < userCart[i].quantity) {
            const itemQty = (userCart[i].addedQuantity);
            console.log(itemQty);
            userCart[i].addedQuantity = itemQty + 1 ;
            localStorage.setItem("cart",JSON.stringify(userCart))
            window.location.reload(true);
        }
        else {
            alert(`Sorry...we only have ${userCart[i].quantity} pieces on stock`)
        }
    }
    const handleDecrement = (i) => {
        if (userCart[i].addedQuantity > 1) {
            const itemQty = (userCart[i].addedQuantity)
            console.log(itemQty);
            userCart[i].addedQuantity = itemQty - 1 ;
            localStorage.setItem("cart",JSON.stringify(userCart))
        }
        else {
            removeItem(i);
        }
        window.location.reload(true);
    }

    const [popUp, setPopUp] = useState(false)
    const duringPopUp = popUp ? " during-popup" : ""

    const removeFromDB = async () => {
        for(let i = 0; i < userCart.length; i++) {
            const quantity = userCart[i].quantity - userCart[i].addedQuantity;
            const response = await fetch (url + userCart[i].key + "/quantity/.json", {
                method: "DELETE",
            })
            const res = await fetch (url + userCart[i].key + "/quantity/.json", {
                method: "PUT",
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': 'PUT',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
                    "Access-Control-Allow-Headers": "append,delete,entries,foreach,get,has,keys,set,values,Authorization"
                  },
                body: JSON.stringify(quantity),
            })
        }
    }

    const checkout = () => {
        removeFromDB()
        setPopUp(true);
    }

    return (
        <div className={"page cartPage" + duringPopUp}>
            <Logo />
            <NavBar />
            <div className="container content md-4 lg-5">
                <div className={"box table-responsive col-lg-7 col-md-5 col-sm-4 xs-3 p-5" + duringPopUp}>
                    <table className="table">
                        <thead className='tableHead'>
                            <tr>
                                <th scope="col" className={"thProduct" + duringPopUp}>
                                    Product
                                </th>
                                <th scope="col" className={"thProduct" + duringPopUp}>
                                    Price
                                </th>
                                <th scope="col" className={"thProduct" + duringPopUp}>
                                    Quantity
                                </th>
                            </tr>
                        </thead>
                        {userCart && userCart.map((item, i) => {
                                return (
                                    <tbody className= "tableBody" key={item.key}>
                                        <tr>
                                            <th scope="row">
                                                <div className="p-2">
                                                    <img src={item.image} width="70" className="img-fluid rounded shadow-sm" />
                                                    <div className="ms-3 d-inline-block align-middle">
                                                        <h5 className="mb-0"> <a href="/productPage" onClick={setKey(item)} className="text-primary d-inline-block align-middle">{item.name}</a></h5>
                                                    </div>
                                                </div>
                                            </th>

                                            <td className="border-0 align-middle"><strong>${priceQty(item)}</strong></td>

                                            <td className="border-0 align-middle">
                                                <div className="col-md-3" style={{width:"110px"}}>
                                                    <div className="input-group">
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-outline-primary" type="button" onClick={() => handleDecrement(i)}>-</button>
                                                        </div>
                                                        <input type="text" className="form-control" max={item.quantity} value={item.addedQuantity}/>
                                                        <div className="input-group-prepend">
                                                            <button className="btn btn-outline-primary" type="button" onClick={() => handleIncrement(i)}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="border-0 align-middle"><a href="#" className="text-primary" style={{fontSize: "x-large"}} onClick={() => removeItem(i)}><BiTrash /></a></td>
                                        </tr>
                                    </tbody>
                                )
                        })}
                        {!userCart &&
                            <tbody>
                            <tr>
                                <td className="border-0 align-middle"><strong>Cart is empty</strong></td>
                            </tr>
                        </tbody>
                        }
                    </table>
                </div>
            
                <div className={"box row py-5 p-4 shadow-sm" + duringPopUp}>
                    <div className={"thProduct rounded-pill px-4 py-3" + duringPopUp}>
                        Order summary 
                    </div>
                    <div className="p-4">
                        <ul className="list-unstyled mb-4">
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal</strong><strong>${userCart ? orderSubtotal() : "0"}</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>${userCart ? shipping : "0"}</strong></li>
                            <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
                                <h5 className="fw-bold">${userCart ? total() : "0"}</h5>
                            </li>
                        </ul>
                        <a href="#" className={"btn checkoutBtn rounded-pill py-2 d-md-block" + duringPopUp} onClick={() => userCart && checkout()}>Proceed to checkout</a>
                    </div>
                    {popUp && <PopUp setPopUp={setPopUp}/>}
                </div>
            </div>
        </div>
    )
}

export default CartPage
