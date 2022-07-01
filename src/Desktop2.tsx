import React from 'react'
import { FunctionComponent, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import "./css/Desktop2.css";
import "./css/General.css";

export const Desktop2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onChooseBtn3Click = useCallback(() => {
    navigate("/desktop-3");
  }, [navigate]);

  const snowCategory = () => {
    localStorage.setItem('Category', "snowboards");
  }

  const skisCategory = () => {
    localStorage.setItem('Category', "skis");
  }

  return (
    <div className="page desktop-2" id="secondPage">
      <Logo />
      <NavBar />

      <div className="container">

        <div className="category-div card mb-3 col-xs-6 col-sm-8 col-lg-6 card2">
          <div className="row g-0">
            <div className="col-md-3">
              <img className="img-fluid cat-icon" alt="Snowboarder" src="rectangle-4@2x.png" />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h1 className="catTitle">Snowboards</h1>
                <p className="description">
                  Do you believe you are a real snowboarder?<br />
                  Check our products in this category!
                </p>
              </div>

              <Link to={"/productsCategory"}>
                <button className="choose-btn" onClick={snowCategory}>
                  Choose
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="category-div card mb-3 col-xs-6 col-sm-8 col-lg-6 card2">
          <div className="row g-0">
            <div className="col-md-3">
              <img className="img-fluid cat-icon" alt="Skier" src="rectangle-5@2x.png" />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h1 className="catTitle">Skis</h1>
                <p className="description">
                  Maybe you think you are a real skier.<br />
                  Take a look our products from this category!
                </p>
              </div>

              <Link to={"/productsCategory"}>
                <button className="choose-btn" onClick={skisCategory}>
                  Choose
                </button>             
              </Link>
            </div>
          </div>
        </div>


        <div className="category-div card mb-3 col-xs-6 col-sm-8 col-lg-6 card2">
          <div className="row g-0">
            <div className="col-md-3">
              <img className="img-fluid cat-icon" alt="Accessories" src="rectangle-6@2x.png" />
            </div>

            <div className="col-md-8">
              <div className="card-body">
                <h1 className="catTitle">Accessories</h1>
                <p className="description">
                  Or maybe you need some accessories.<br />
                  We hope you will find anything you need here!
                </p>
              </div>
            
              <button className="choose-btn" onClick={onChooseBtn3Click}>
                Choose
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
