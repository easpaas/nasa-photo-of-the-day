import React, {useState, useEffect} from 'react';
import '../components/CardContainer.css';
import Card from './Card';
import Axios from 'axios';

const CardContainer = ({data}) => {

  return (
    <div className="container">
      <Card data={data} />
    </div>
  )
}

export default CardContainer;