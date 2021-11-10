import React from "react";

const Card = (props) => {
  const { name, description, price, image } = props;

  return (
    <div>
      <div className="template">
        <div className="image">
          <img src={image} alt="img" />
        </div>
        <div className="price">{price}</div>
        <div className="name">{name}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;