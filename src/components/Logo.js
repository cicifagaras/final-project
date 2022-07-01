import React from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();

  const firstPage = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div>
      <img 
      onClick={firstPage}
      className="img-fluid logo" 
      alt="Logo" 
      src="logo@2x.png" 
      style={{"top": "3px", "maxHeight": "150px", "float": "left", "cursor": "pointer"}}/>
    </div>
  )
}

export default Logo
