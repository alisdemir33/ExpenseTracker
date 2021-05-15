import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import FormVisibleToggle from './FormVisibleToggle'

const NewExpense = (props) => {

    const [formVisible, setFormVisible] = useState(false);

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log('NewExpense id added enteredExpenseData')
        console.log(expenseData)

        props.onAddExpense(expenseData);

    }

    const onSetFormVisible = () => {
        setFormVisible((prevState) => {
            return !formVisible
        })
    }

    let formToShow = formVisible ?
        (<ExpenseForm onToggle={onSetFormVisible} onSaveExpenseData={saveExpenseData}/> )      
        :
        (<FormVisibleToggle onToggle={onSetFormVisible}></FormVisibleToggle>);


    return (
        <div className="new-expense">
            {formToShow}
        </div>
    );

}

export default NewExpense;