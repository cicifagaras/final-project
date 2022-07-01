import React from 'react'
import { Nav } from "react-bootstrap"
import { BiStore, BiLockAlt, BiCart } from 'react-icons/bi';
import { Link } from "react-router-dom";
import "../css/General.css"


const NavBar = () => {
    const allProducts = () => {
        localStorage.setItem('Category', "allProducts");
    }
    return (
        <Nav className="nav d-flex flex-row-reverse">
            <Nav.Item>
                <Nav.Link as={Link} to={"/cartPage"}className="navBtn"><BiCart /> Cart</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to={"/productsCategory"} className="navBtn" onClick={allProducts}><BiStore />All Products</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to={"/Admin"} className="navBtn"><BiLockAlt /> Admin</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}
export default NavBar

