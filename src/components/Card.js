import React from "react";
import './style.css'

const Card = (data) => {
  
  console.log('data', data.data)
  const { name, description, price, image } = data.data;

  return (
    <div className="margin-card" >
      <div className="base">
        <img className="imagen" src={image} alt="img" />
        <label className="label label-text">{price}</label>
        <div className="cardbox">
          <p className="titulo">{name}</p>
          <p className="parrafo">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;