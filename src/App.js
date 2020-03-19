import React, { useState, useEffect } from "react";
import "./App.css";
import Header from './components/Header';
import CardContainer from './components/CardContainer'; 
import Footer from './components/Footer';
import Axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    Axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error)
    })
  }, [date]);

  return (
    <div className="App">
      <Header 
        date={date}
        setDate={setDate} 
      />
      <CardContainer 
        data={data} 
      />
      <Footer />
    </div>
  );
}

export default App;
