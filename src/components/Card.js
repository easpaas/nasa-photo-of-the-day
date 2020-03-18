import React, {useState, useEffect} from 'react';
import '../components/Card.css';
import Axios from 'axios';

const Card = () => {
  // store data from NASA API 
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
  //   .then(response => {
  //     console.log(response)
  //     setData(response.data);
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  // }, []);

  return (
    <div className="container">
      <div className="image">

        {/* TODO insert correct image url */}

        <img src={data.url} alt="astronomy" />
      </div>
      <div className="content">

        {/* TODO insert data from NASA API */}

        <p className="bold">{/* data.title */}</p>
        <p>{/* data.explanation */}</p>
      </div>
    </div>
  )
}

export default Card;