import './ExpenseList.css';
import React from 'react';
import ExpenseItem from './ExpenseItem'

const ExpenseList = (props) => {

    if (props.list.length === 0) {
        return <p className="expenses-list__fallback"> No Expense Found!</p>
    }

    return (
        <ul className="expense-list">
            {props.list.map((currExpense) => {
                return (
                    <ExpenseItem
                        key={currExpense.id}
                        exDate={currExpense.date}
                        exTitle={currExpense.title}
                        exPrice={currExpense.amount}>
                    </ExpenseItem>
                )
            })
            } </ul>)
}

export default ExpenseList;