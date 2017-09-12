import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import text from "../constants/SlideShowText"

class SlideShow extends Component {
  displayImages(){
    let number = 0
    return text.map((caption, index)=> {
        number++
        console.log(number);
        return(
          <Carousel.Item key={index}>
            <img alt={caption} src={`./img/${number.toString()}.png`}/>
            <Carousel.Caption>
              <p style={{
                marginBottom: "50px",
                backgroundColor: "white",
                color: "black"
              }}>{caption}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )
     }
    )
  }


  render () {
    return (
      <Carousel interval={null}>
        {this.displayImages()}
      </Carousel>
    );
  }
};

export default SlideShow;
