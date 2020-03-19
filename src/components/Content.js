import React from 'react';

const Content = ({title, explanation, copyright, dated}) => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <p>{explanation}</p>
      <p>copyright: {copyright} {dated}</p>
    </div> 
  )
}
export default Content;