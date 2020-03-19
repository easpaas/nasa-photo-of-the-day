import React from 'react';
import './CardContainer.css';
import CardImage from './CardImage';
import Content from './Content';

const Card = ({data}) => {
  return (
    <div className="card">
      <CardImage 
        image={data.url} 
        title={data.title}
      />
      <Content
        title={data.title}
        explanation={data.explanation}
        copyright={data.copyright}
        dated={data.date}
      />
    </div>
  );
}

export default Card;
