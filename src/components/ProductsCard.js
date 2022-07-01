import React from "react";
import { useState, useEffect } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { BiCart } from 'react-icons/bi';
import axios from "axios";
import { Link } from "react-router-dom";

const ProductsCard = () => {
    const [products, setProducts] = useState([]);
    const url = "https://winter-sports-ac114-default-rtdb.europe-west1.firebasedatabase.app/"

    useEffect(() => {
        fetchProducts();
    }, [])
     
     // Fetch Products
     const fetchProducts = async () => {
         try {
         const dbProducts = await axios.get(url  +"/.json")
         setProducts(dbProducts.data) 
         } catch (err) {
             console.error(err.message);
         }
    }

    const keyProduct = Object.keys(products)
    
    const getKey = (i) => {
        localStorage.setItem("KeyProduct", keyProduct[i]);
        console.log(keyProduct[i]);
    }
    const data = Object.values(products); 
    console.log(data);  

    const addToCart =  (i) => {
        let extraQty = 0;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        for(let k = 0; k < cart.length; k++) {
            if(data[i].name === cart[k].name){
                extraQty = cart[k].addedQuantity;
                cart.splice(k, 1)   
            }
        }   

        const item = {
            name: data[i].name,
            price: data[i].price,
            quantity: Number(data[i].quantity),
            image: data[i].image,
            key: keyProduct[i],
            addedQuantity: 1 + extraQty
        }
        cart.push(item)
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added successfully!")
    }

    return (
        <Row xs={2} sm={2} md={4} className="g-0" style={{ marginTop: "20px" }}>
            {data.map((products, i) => {
                if (products.category === localStorage["Category"]) {
                    return (
                        <Col className="cardCol" key={keyProduct[i]}> 
                            <Card className="productCard">
                                <Card.Img style={{ height: '90px', border: "2px solid #5F87C9", marginTop:"10px"}} variant="top" src={products.image} />
                                <Card.Body>
                                    <Link to={"/productPage"}>
                                        <Card.Title onClick={() => getKey(i)}>{products.name} </Card.Title>
                                    </Link>
                                    <Card.Text>
                                        {products.price}$
                                    </Card.Text>
                                    <Card.Link href="#"  onClick={() => addToCart(i)}><BiCart/>Buy</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
                else if (localStorage["Category"] === "allProducts") {
                    return (
                        <Col className="cardCol" key={keyProduct[i]}>
                            <Card className="productCard">
                                <Card.Img style={{ height: '90px', border: "2px solid #5F87C9", marginTop:"10px"}} variant="top" src={products.image} />
                                <Card.Body>
                                    <Link to={"/productPage"}>
                                        <Card.Title onClick={() => getKey(i)}>{products.name} </Card.Title>
                                    </Link>
                                    <Card.Text>
                                        {products.price}$
                                    </Card.Text>
                                    <Card.Link href="#"  onClick={() => addToCart(i)}><BiCart />Buy</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            })}
        </Row>
    )
}

export default ProductsCard
    
  
  
