import React from 'react'
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Logo from "./Logo";
import NavBar from "./NavBar";
import HeaderAdm from "./HeaderAdm";
import "../css/General.css";
import "../css/Admin.css";
import FormNewProduct from './FormNewProduct';
import TableAdmin from './TableAdmin';

const Admin = () => {
    
    const url = "https://winter-sports-ac114-default-rtdb.europe-west1.firebasedatabase.app/.json"
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
       fetchProducts();
    }, [])
    
    // Fetch Products
    const fetchProducts = async () => {
        try {
        const dbProducts = await axios.get(url)
        setProducts(dbProducts.data) 
        } catch (err) {
            console.error(err.message);
        }
    }
    
    //Add Product
    const addProduct = async (product) => {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(product)
        })
        
        const data = await response.json();
        setProducts([...products, data])
    }
    
    return (
        <div className="page adminPage">
            <Logo />
            <NavBar />
            <div className="content d-flex flex-row justify-content-between">
                <div className="inventoryList">
                    <div>
                        <HeaderAdm 
                            onAdd={() => setShowAddProduct(!showAddProduct)}
                            showAdd={showAddProduct}
                        />
                        <Routes>
                            <Route 
                                path="/"
                                element={
                                    <>
                                        { (showAddProduct || localStorage["ProdKey"] !== undefined ) && <FormNewProduct onAdd={(product) => addProduct(product)} />}
                                    </>
                                }
                            />             
                        </Routes>

                    </div>   
                            
                    <TableAdmin />
                </div>
            </div>
        </div>
    )
}

export default Admin