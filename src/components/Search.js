import React from 'react';

const Search = ({date, setDate}) => {

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setDate(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="date" value={date} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Search;