import React from 'react';

const CardImage = ({image, title}) => {
  return (
    <div className="image">
      <img src={image} alt={title} />
    </div>
  )
}

export default CardImage;