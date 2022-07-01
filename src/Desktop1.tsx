import React from 'react'
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "./components/Logo";
import NavBar from "./components/NavBar";
import "./css/Desktop1.css";
import "./css/General.css"


export const Desktop1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/desktop-2");
  }, [navigate]);
  return (
    <div className="page desktop-1" id="firstPage">
      <Logo />
      <NavBar />
      
      <h1 className="titleContainer col-xs-7 col-sm-6 col-lg-6" id="title">
          <span>
            <span className='blackSpan'>Experience the adventure on </span>
            <span className="snowboard-span">snowboard</span>
            <span className='blackSpan'> and </span>
            <span className="snowboard-span">skis</span>
          </span>
      </h1>

      <div className="col-xs-7 col-sm-6 col-lg-6">
        <p id="pageDescription">
          If you want to have some new adventures this winter, check out our best
          quality products.
        </p>
      </div>

      <button className="button" onClick={onButtonClick}>
        Start Shopping
      </button>
    </div>
  );
};
