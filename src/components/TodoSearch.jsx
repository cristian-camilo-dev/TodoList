import React from "react";
import "../styles/TodoSearch.css";

// function TodoSearch({ searchValue, setSearchValue }) {
//   const search = (e) => {
//     console.log(e.target.value);
//     setSearchValue();
//   };

//   return (
//     <input
//       className="app-search"
//       value={searchValue}
//       placeholder="Search"
//       onChange={search}
//     />
//   );
// }

function TodoSearch({ searchValue, setSearchValue }) {
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="app-search"
      placeholder="Search"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export default TodoSearch;
