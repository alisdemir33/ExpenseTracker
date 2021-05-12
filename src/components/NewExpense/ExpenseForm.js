import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
 const [enteredTitle, setTitle] =useState('');
 const [enteredAmount, setAmount] =useState('');
 const [enteredDate, setDate] =useState( '');


    const titleChangeHandler =(event) =>{
        event.preventDefault();
        setTitle(event.target.value);
    }

    const amountChangeHandler = (event) =>{
        event.preventDefault();
     
        setAmount( event.target.value)

    }

    const dateChangeHandler = (event) =>{
        event.preventDefault();
        setDate(event.target.value)

    }

    const submitHandler = (event) =>{
        event.preventDefault();
        
        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

        console.log(expenseData)

        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');

    } 

    return (
        <div className="new-expense">
            <form on onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={enteredTitle} value={enteredTitle} onChange={titleChangeHandler} />
                                         </div>

                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value ={enteredAmount} onChange={amountChangeHandler} />
                      
                    </div>

                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
                    </div>                   
                    <div className="new-expense__actions">
                        <button type="submit" >Add Expense</button>
                    </div>
                    

                </div>
            </form>
        </div>

    );

}

export default ExpenseForm;