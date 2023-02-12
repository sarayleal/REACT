import React from 'react';
import "./Image.modules.css";


const Image = ({src, alt, width, height}) => {
  return (
    <img src={"https://res.cloudinary.com/damtbzspb/image/upload/v1676228844/OIP_opblnh.jpg"} alt={"An example image"} width={"250px"} height={"250px"}/>
  )
}

export default Image


