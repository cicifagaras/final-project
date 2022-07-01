import React from "react";
import Slider from "react-slick"
import { Component } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/ProductsCategory.css";



export default class CarouselHorizontally extends Component {
    render() {
      const snowCategory = () => {
        localStorage.setItem('Category', "snowboards");
      }
    
      const skisCategory = () => {
        localStorage.setItem('Category', "skis");
      }

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
    
      var settings = {
        infinite: false,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
      };
      return (
        <div>
          <Slider className ="carousel" {...settings}>
            <Card className = "cardContainer" onClick={snowCategory}>
              <Card.Img className="img" src="https://assets.sportsport.ro/system/cache/000/540/507/small_placa-snowboard-copii-arbor-cheater-21-2.jpg"/>
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Snowboards</Card.Title>
                  </Card.Body>
                </Link>
            </Card>

            <Card className = "cardContainer" onClick={skisCategory}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/de/0a/62/de0a6263020292883dd141a362540088.jpg" />
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Skis</Card.Title>
                  </Card.Body>
                </Link>
            </Card>

            <Card className = "cardContainer" onClick={helmetsCategory}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/c3/0d/fc/c30dfc60c44fa8f5995595059ee52f9b.jpg" />
              <Link to={"/productsCategory"}>
                <Card.Body>
                  <Card.Title>Helmets</Card.Title>
                </Card.Body>
              </Link>
            </Card>

            <Card className = "cardContainer" onClick={gogglesCategory}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/b0/4a/d3/b04ad37059135b9d4cba4996616d46b4.jpg" />
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Goggles</Card.Title>
                  </Card.Body>
                </Link>
            </Card>

            <Card className = "cardContainer" onClick={glovesCategory}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/35/54/db/3554db71c621e362bac88aabe34670ba.jpg" />
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Gloves</Card.Title>
                  </Card.Body>
                </Link>
            </Card>
            
            <Card className = "cardContainer" onClick={skiPolesCategory}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/e0/d0/82/e0d0828b64834c0d2c882603cefd863b.jpg" />
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Ski Poles</Card.Title>
                  </Card.Body>
                </Link>
            </Card>

            <Card className = "cardContainer" onClick={skiBootsCategory}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/f6/4c/ce/f64ccebb9aa55c4b8a3973df6c1f814c.jpg" />
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Ski Boots</Card.Title>
                  </Card.Body>
                </Link>
            </Card>

            <Card className = "cardContainer" onClick={snowboardBootsCategory}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/f8/33/3f/f8333fbcdb553fd44d915f702cf9df89.jpg" />
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Snowboard Boot</Card.Title>
                  </Card.Body>
                </Link>
            </Card>

            <Card className = "cardContainer" onClick={snowboardBindings}>
              <Card.Img className="img" variant="top" src="https://i.pinimg.com/564x/d5/e8/eb/d5e8eb89c8523bb5a58fda0a382f4389.jpg" />
                <Link to={"/productsCategory"}>
                  <Card.Body>
                    <Card.Title>Snowboards Bindings</Card.Title>
                  </Card.Body>
                </Link>
            </Card>
            
          </Slider>
        </div>
      );
    }
  }
