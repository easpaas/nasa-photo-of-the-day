import React from 'react';
import '../components/Header.css';
import Search from './Search';

const Header = ({date, setDate}) => {
  return (
    <div className="header">
      <h1>NASA</h1>
      <p>"Astronomy Photo Of The Day"</p>
      <Search 
        date={date}
        setDate={setDate} 
      />
    </div>
  )
}

export default Header;