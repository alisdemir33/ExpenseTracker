import React, { useState } from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css' ;
import Header from '../Header/Header'
import Card from '../UI/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

const ExpenseList = (props) => {

    const [filterValue,setFilterValue] =useState('');
    const [filteredExpenseList, setFilteredExpenseList] = useState(props.expenses);
  
    const filterExpensesHandler = (filterValueParam) => {
       
        console.log('Filter by' + filterValueParam);
        setFilterValue(filterValueParam)
    
        if (filterValueParam == 'none')
        setFilteredExpenseList(props.expenses)
        else {
          const filteredList = props.expenses.filter((exp) => {
            return exp.date.getFullYear() == filterValueParam
          })
          console.log('fl:'+filteredList);
          setFilteredExpenseList(filteredList);
        }    
      }

  
    const expenseList = filteredExpenseList.map((currExpense) => {
        return (
            <ExpenseItem
                exDate={currExpense.date}
                exTitle={currExpense.title}
                exPrice={currExpense.amount}>
            </ExpenseItem>);
    })

    return <Card className="expenses">
       <Header count={expenseList.length} text ="Expense List"></Header>
       <ExpensesFilter filterVal={filterValue} onFilterChange={filterExpensesHandler}></ExpensesFilter>
        {expenseList}
        </Card>;
}
export default ExpenseList;