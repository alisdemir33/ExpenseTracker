import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css' ;
import Header from '../Header/Header'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const ExpenseList = (props) => {

    const [filterValue,setFilterValue] =useState('none');
   // const [filteredExpenseList, setFilteredExpenseList] = useState(props.expenses);
  
    const filterExpensesHandler = (filterValueParam) => {
       
        console.log('Filter by' + filterValueParam);
        setFilterValue(filterValueParam)
    
          
      }
//;debugger
      let filteredList=[];
      if (filterValue == 'none')
      filteredList=props.expenses;
      else {
         filteredList = props.expenses.filter((exp) => {
          return exp.date.getFullYear() == filterValue
        })
       // console.log('fl:'+filteredList);
      //  setFilteredExpenseList(filteredList);
      } 

  
    const expenseList = filteredList.map((currExpense) => {
        return (
            <ExpenseItem
            key={currExpense.id}
                exDate={currExpense.date}
                exTitle={currExpense.title}
                exPrice={currExpense.amount}>
            </ExpenseItem>);
    })

    console.log('RENDERED List'+expenseList.length)

    return <Card className="expenses">
       <Header count={expenseList.length} text ="Expense List"></Header>
       <ExpensesFilter filterVal={filterValue} onFilterChange={filterExpensesHandler}></ExpensesFilter>
        {expenseList}
        </Card>;
}
export default ExpenseList;