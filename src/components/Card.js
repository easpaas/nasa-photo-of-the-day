import React, {useState, useEffect} from 'react';
import '../components/Card.css';

const Card = () => {
  // store data from NASA API 
  const [data, setData] = useState([]);

  // TODO 
  // useEffect(() => {
  //   // TODO axios to NASA API 
  // }, []);

  return (
    <div className="container">
      <div className="image">

        {/* TODO insert correct image url */}

        <img>{/* data.img */}</img>
      </div>
      <div className="content">

        {/* TODO insert data from NASA API */}

        <p>{/* data.title */}</p>
        <p>{/* data.description */}</p>
      </div>
    </div>
  )
}

export default Card;