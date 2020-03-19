import React from 'react';
import './CardContainer.css';

const Card = ({data}) => {
  return (
    <div>
      <div className="image">
        <img src={data.url} alt="astronomy" />
      </div>
      <div className="content">
        <h3 className="bold">{data.title}</h3>
        <p>{data.explanation}</p>
      </div> 
    </div>
  );
}

export default Card;
