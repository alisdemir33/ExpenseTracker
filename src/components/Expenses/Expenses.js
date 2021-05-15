import React, { useState } from 'react';
import './Expenses.css' ;
import Header from '../Header/Header'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import ExpenseList from './ExpenseList'

const Expenses = (props) => {

    const [filterValue,setFilterValue] =useState('none');
   // const [filteredExpenseList, setFilteredExpenseList] = useState(props.expenses);
  
    const filterExpensesHandler = (filterValueParam) => {       
        console.log('Filter by' + filterValueParam);
        setFilterValue(filterValueParam)          
      }

      let filteredList=[];
      if (filterValue == 'none')
      filteredList=props.expenses;
      else {
         filteredList = props.expenses.filter((exp) => {
          return exp.date.getFullYear() == filterValue
        })     
      } 

      let expenseContent=<ExpenseList list={filteredList}></ExpenseList>


    return <Card className="expenses">
       <Header count={filteredList.length} text ="Expense List"></Header>
       <ExpensesFilter filterVal={filterValue} onFilterChange={filterExpensesHandler}></ExpensesFilter>
        <ExpensesChart filteredExpenses={filteredList}></ExpensesChart>
        {expenseContent}
        </Card>;
}
export default Expenses;