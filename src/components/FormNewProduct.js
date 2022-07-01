import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import "../css/General.css"

const FormNewProduct = ({onAdd}) => {
    const [name, setName] = useState("");
    const [id,setID] = useState("");
    const [category, setCategory] = useState("");
    const [quantity,setQuantity] = useState("");
    const [price,setPrice] = useState("");
    const [details, setDetails] = useState("");
    const [image, setImage] = useState("");
    const url = "https://winter-sports-ac114-default-rtdb.europe-west1.firebasedatabase.app/"
    
    
    const onSubmit = () => {
        if (!name || !id || !category || !quantity || !price)  {
            alert("Please insert all the details!");
            return;
        };
        
        onAdd({name, id, category, quantity, price, details, image});
        
        setName("");
        setID("");
        setCategory("");
        setQuantity("");
        setPrice("");
        setDetails("");
        setImage("");
    }

    const prodKey = localStorage.getItem('ProdKey')

    const OnEdit = async () => {
        const response = await fetch(url + prodKey + "/.json", {
            method: "PUT",
            body: JSON.stringify({
                name: name,
                id: id,
                category: category,
                quantity: quantity,
                price: price,
                details: details,
                image: image
            })
        })
        localStorage.clear();
    }
    
    useEffect(() => {
        axios.get(url + prodKey + "/.json")
        .then((response) => {
            setName(response.data.name);
            setID(response.data.id);
            setCategory(response.data.category);
            setQuantity(response.data.quantity);
            setPrice(response.data.price);
            setDetails(response.data.details);
            setImage(response.data.image);
            
        })
    }, [])
    
    if (localStorage["ProdKey"] !== undefined) {
        return (
            <form className="addForm" onSubmit={OnEdit}>
                <div className="formControl">
                    <label>Name:</label>
                    <input 
                    type="text" 
                    placeholder="Add Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
    
                <div className="formControl">
                    <label>Id:</label>
                    <input 
                    type="text"
                    placeholder="Add ID"
                    value={id}
                    onChange={(e) => setID(e.target.value)} 
                    />
                </div>
    
                <div className="formControl">
                    <label>Category:</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option>Select</option>
                        <option value="snowboards">Snowboards</option>
                        <option value="skis">Skis</option>
                        <option value="helmets">Helmets</option>
                        <option value="goggles">Goggles</option>
                        <option value="gloves">Gloves</option>
                        <option value="skiPoles">Ski Poles</option>
                        <option value="skiBoots">Ski Boots</option>
                        <option value="snowboardBoots">Snowboard Boots</option>
                        <option value="skiBindings">Ski Bindings</option>
                        <option value="snowboardBindings">Snowboards Bindings</option>
                    </select>
                </div>
    
                <div className="formControl">
                    <label>Quantity:</label>
                    <input 
                    type="number"
                    placeholder="Add Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)} 
                    />
                </div>
    
                <div className="formControl">
                    <label>Details:</label>
                    <textarea 
                    className="formTextarea"
                    type="text"
                    placeholder="Add Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)} 
                    />
                </div>
    
                <div className="formControl">
                    <label>Price:</label>
                    <input 
                    type="number"
                    placeholder="Add Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                    />
                </div>

                <div className="formControl inputButtons">
                    <label>Image:</label>
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>    

                
                <div>
                    <input type="submit" value="Update" className="saveBtnForm"/>
                </div>
            </form>
        )
    }      

    else {
        return (
            <form className="addForm" onSubmit={onSubmit}>
                <div className="formControl">
                    <label>Name:</label>
                    <input 
                    type="text" 
                    placeholder="Add Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="formControl">
                    <label>Id:</label>
                    <input 
                    type="text"
                    placeholder="Add Id"
                    value={id}
                    onChange={(e) => setID(e.target.value)} 
                    />
                </div>

                <div className="formControl">
                    <label>Category:</label>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option>Select</option>
                        <option value="snowboards">Snowboards</option>
                        <option value="skis">Skis</option>
                        <option value="helmets">Helmets</option>
                        <option value="goggles">Goggles</option>
                        <option value="gloves">Gloves</option>
                        <option value="skiPoles">Ski Poles</option>
                        <option value="skiBoots">Ski Boots</option>
                        <option value="snowboardBoots">Snowboard Boots</option>
                        <option value="skiBindings">Ski Bindings</option>
                        <option value="snowboardBindings">Snowboards Bindings</option>
                    </select>
                </div>

                <div className="formControl">
                    <label>Quantity:</label>
                    <input 
                    type="number"
                    placeholder="Add Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))} 
                    />
                </div>

                <div className="formControl">
                    <label>Details:</label>
                    <textarea 
                    className="formTextarea"
                    type="text"
                    placeholder="Add Details"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)} 
                    />
                </div>

                <div className="formControl">
                    <label>Price:</label>
                    <input 
                    type="number"
                    placeholder="Add Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                    />
                </div>

                <div className="formControl inputButtons">
                    <label>Image:</label>
                    <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>    
                
                <div>
                    <input type="submit" value="Save Item" className="saveBtnForm"/>
                </div>
            </form>
        )
    }
}

export default FormNewProduct