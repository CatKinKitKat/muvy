import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import img1 from './Images/Image1.png'
import img2 from './Images/Image2.png'
import img3 from './Images/Image3.jpg'

function TrailerSlider () {
  return (
      <div>
          <hr/>
          <Carousel>
              <Carousel.Item>
                <img src = {img1} height="300px" width="350px" alt="Img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src = {img2} height="300px" width="350px" alt="Img1"/>
              </Carousel.Item>
              <Carousel.Item>
                  <img src = {img3} height="300px" width="350px" alt="Img1"/>
              </Carousel.Item>
          </Carousel>

      </div>

  )
}
export default TrailerSlider
