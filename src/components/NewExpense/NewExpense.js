import React from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) =>{

    const saveExpenseData =(enteredExpenseData) =>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log('NewExpense id added enteredExpenseData')
        console.log(expenseData)        

        props.onAddExpense(expenseData);

    }

    return(
<div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseData}>

    </ExpenseForm>
</div>

    );

}

export default NewExpense;