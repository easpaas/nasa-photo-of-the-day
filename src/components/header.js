import React from 'react';
import '../components/Header.css';

const Header = () => {
  return (
    <div className="header">
      <h1>NASA</h1>
      <p>"Astronomy Photo Of The Day"</p>
    </div>
    // TODO - time permitting add a form with search option. Dependent on data from NASA API**
  )
}

export default Header;