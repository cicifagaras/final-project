import React from 'react'
import Logo from './Logo'
import NavBar from './NavBar'
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/General.css";
import "../css/ProductPage.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductPage = () => {
  const [product, setProduct] = useState([]);
    const url = "https://winter-sports-ac114-default-rtdb.europe-west1.firebasedatabase.app/"

    useEffect(() => {
        fetchProduct();
    }, [])
     
     // Fetch Products
     const fetchProduct = async () => {
         try {
         const dbProduct = await axios.get(url + localStorage["KeyProduct"] + "/.json")
         setProduct(dbProduct.data) 
         } catch (err) {
             console.error(err.message);
         }
        }

    const [quantity, setQuantity] = useState(0)

    const handleIncrement = () => {
      if(quantity >= product.quantity){
        alert(`Sorry...we only have ${product.quantity} pieces on stock`)
      }
      else {
        setQuantity(prevCount => prevCount + 1)
      }
    }
    const handleDecrement = () => {
      if (quantity >= 1){
        setQuantity(prevCount => prevCount - 1)
      }
    }

    const addToCart = () => {
      let extraQty = 0;
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (quantity >= 1 ) {
        for(let i = 0; i < cart.length; i++) {
          if(cart[i].name === product.name){
            extraQty = cart[i].addedQuantity;
            cart.splice(i, 1)   
          }
        }
        const newItem = {
          name: product.name,
          price: product.price,
          quantity: Number(product.quantity),
          image: product.image,
          key: localStorage["KeyProduct"],
          addedQuantity: Number(quantity) + extraQty
        }
        cart.push(newItem)
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added successfully!")
        setQuantity(0)
      }
      else{
        alert("Please select a quantity!")
      }
    }
    
    console.log(product);
  return (
    <div className="page productPage">
      <div>
        <Logo />
        <NavBar />
      </div>

      <div style={{display:"flex", flexDirection:"row"}} className="detailsCard">
        <Card style={{overflow:"hidden", height:"250px"}}>
          <Card.Img src={product.image}/>
        </Card>

        <Card style={{fontSize: "medium", width:"60%", height:"auto"}} >
          <Card.Header as="h5">Product details:</Card.Header>
          <Card.Body style={{display:"block"}}>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              <span>Product id:</span> {product.id} <br />
              <span>Category:</span> {product.category} <br />
              <span>Availability:</span> {product.quantity} in stock<br />
              <span>Details:</span> {product.details}
            </Card.Text>

            <Card.Text className = "price">{product.price}$</Card.Text>
            <div className="col-md-3" style={{width:"110px"}}>
              <div className="input-group">
                  <div className="input-group-prepend">
                      <button className="btn btn-outline-primary" type="button" onClick={() => handleDecrement()}>-</button>
                  </div>
                  <input type="text" className="form-control" value={quantity}/>
                  <div className="input-group-prepend">
                      <button className="btn btn-outline-primary" type="button" onClick={() => handleIncrement()}>+</button>
                  </div>
              </div>
          </div>
            <Button className="buyBtn" variant="primary" onClick={() => addToCart()}>Add to cart</Button>
          </Card.Body>
        </Card>
      </div>
      
    </div>
  )
}

export default ProductPage
