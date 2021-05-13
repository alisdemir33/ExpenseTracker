  
import React, { useState } from 'react';
import Card from '../UI/Card'

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [filterValue,setFilterValue] =useState('');

  const filterTheExpenses = (event) =>{
   event.preventDefault();
   console.log(event.target.value)
   setFilterValue(event.target.value)
    props.onFilterChange(event.target.value);

  }

  return (
   <Card className="expenses">
   <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year : {filterValue}</label>
        <select value={filterValue} onChange={filterTheExpenses}>
        <option value='none'>None</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
    </Card>
  );
};

export default ExpensesFilter;