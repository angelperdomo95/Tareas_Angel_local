import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
  return(
    <div 
    className="loadingTodo-container">
    <span
    className='loadingTodo.completeIcon'>
    </span>
    <p className='LoadingTodo-text'></p>
    <span
    className='LoadingTodo-deleteIcon'></span>
    </div>
  );
}

  export{ TodosLoading };