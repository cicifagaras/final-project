import React from 'react'
import NavBar from './NavBar'
import Logo from './Logo'
import "../css/General.css";
import "../css/ProductsCategory.css";
import CarouselHorizontally from './CarouselHorizontally';
import ProductsCard from './ProductsCard';


const ProductsCategory = () => {
    function editTitle(string) {
        string = string.charAt(0).toUpperCase() + string.slice(1);

        return string.replace(/[A-Z]/g, ' $&').trim();
      }
    return (
        <div className="page prodCatPage">
            <div>
                <Logo/>            
                <NavBar />
                <div className="carousel">
                    <CarouselHorizontally />
                </div>
            </div>
                <div className='pageTitle'>{editTitle(localStorage["Category"])}</div>
            <div>
                <ProductsCard />
            </div>
                
        </div>
    )

}

export default ProductsCategory
