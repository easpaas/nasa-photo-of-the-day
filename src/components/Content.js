import React from 'react';

const Content = ({title, explanation}) => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <p>{explanation}</p>
    </div> 
  )
}
export default Content;