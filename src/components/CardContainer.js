import React from 'react';
import '../components/CardContainer.css';
import Card from './Card';

const CardContainer = ({data}) => {

  return (
    <div className="container">
      <Card data={data} />
    </div>
  )
}

export default CardContainer;