import React from 'react'
import { Link } from 'react-router-dom';
import { FunctionComponent } from "react";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import "./css/Desktop3.css";
import "./css/General.css"

export const Desktop3: FunctionComponent = () => {
  const helmetsCategory = () => {
    localStorage.setItem('Category', "helmets");
  }
  
  const gogglesCategory = () => {
    localStorage.setItem('Category', "goggles");
  }

  const glovesCategory = () => {
    localStorage.setItem('Category', "gloves");
  }

  const skiPolesCategory = () => {
    localStorage.setItem('Category', "skiPoles");
  }

  const skiBootsCategory = () => {
    localStorage.setItem('Category', "skiBoots");
  }

  const snowboardBootsCategory = () => {
    localStorage.setItem('Category', "snowboardBoots");
  }

  const snowboardBindings = () => {
    localStorage.setItem('Category', "snowboardBindings");
  }

  return (
    <div className="page desktop-3" id="thirdPage">
      <Logo />
      <NavBar />

      <div className="container-fluid p-0 m-0">
        <div className="row w-100 p-0 w-0">

          <div className=" col-lg-4 mb-2">
            <Link to={"/productsCategory"}>
              <div className="card cards mx-auto" onClick={helmetsCategory}>
                <img src="rectangle-7@2x.png" className="card-img-top" alt="Helmet"/>
                    <p className="card-title">Helmets</p>
              </div>
            </Link>
          </div>

          <div className=" col-lg-4 mb-2">
            <Link to={"/productsCategory"}>
              <div className="card cards mx-auto" onClick={gogglesCategory}>
                <img src="rectangle-8@2x.png" className="card-img-top" alt="Googles"/>
                    <p className="card-title">Goggles</p>
              </div>
            </Link>
          </div>

          <div className=" col-lg-4 mb-2">
            <Link to={"/productsCategory"}>
              <div className="card cards mx-auto" onClick={glovesCategory}>
                <img src="rectangle-9@2x.png" className="card-img-top" alt="Gloves"/>
                    <p className="card-title">Gloves</p>
              </div>
            </Link>
          </div>

        </div>
      </div>  

      <div className="container-fluid p-0 m-0">
        <div className="row w-100 p-0 w-0">

          <div className=" col-lg-4 mb-2">
            <Link to={"/productsCategory"}>
              <div className="card cards mx-auto" onClick={skiPolesCategory}>
                <img src="rectangle-10@2x.png" className="card-img-top" alt="Ski Poles"/>
                    <p className="card-title">Ski Poles</p>
              </div>
            </Link>
          </div>

          <div className=" col-lg-4 mb-2">
            <Link to={"/productsCategory"}>
              <div className="card cards mx-auto" onClick={skiBootsCategory}>
                <img src="rectangle-11@2x.png" className="card-img-top" alt="Ski boots"/>
                    <p className="card-title">Ski boots</p>
              </div>
            </Link>
          </div>

          <div className=" col-lg-4 mb-2">
           <Link to={"/productsCategory"}>
              <div className="card cards mx-auto" onClick={snowboardBootsCategory}>
                <img src="rectangle-12@2x.png" className="card-img-top" alt="Snowboard boots"/>
                    <p className="card-title">Snowboard boots</p>
              </div>
            </Link>
          </div>
          
          <div className=" col-lg-4 mb-2">
           <Link to={"/productsCategory"}>
              <div className="card cards mx-auto" onClick={snowboardBindings}>
                <img src="rectangle-13@2x.png" className="card-img-top snowboardBinding" alt="Snowboard bindings"/>
                    <p className="card-title">Snowboard bindings</p>
              </div>
            </Link>
          </div>
        </div>
      </div>  
    </div>
  );
};
