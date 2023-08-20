import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue}) {
  const onsearchValueCHange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };


  return(
  <input
  placeholder="Escribe aca tu tarea pendiente"
  className="TodoSearch"
  value={searchValue}
  onChange={(event)=>{
  setSearchValue(event.target.value);
}}
/>
);
}
  export{TodoSearch};