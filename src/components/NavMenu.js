import React, { useState } from 'react'

function NavMenu() {
  const [search, setSearch] = useState();

  const handleSearchInpt = e => {
    setSearch(e.target.value);
  };

  return (
    <nav className="main-nav">
      <ul>
        <li>Logo</li>
        <li>
          <form>
            <input 
            type="text"
            value={search}
            onChange={handleSearchInpt}
            
            placeholder="Search movie .."
            />
          </form>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu
