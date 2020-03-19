import React, {useState, useEffect} from 'react';
import '../components/CardContainer.css';
import Card from './Card';
import Axios from 'axios';

const CardContainer = () => {
  // store data from NASA API 
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      console.log(response)
      setData(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, []);

  return (
    <div className="container">
      <Card data={data} />
    </div>
  )
}

export default CardContainer;