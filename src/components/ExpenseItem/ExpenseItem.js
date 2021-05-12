import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../UI/Card'
import { useState } from 'react';

const ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.exTitle);

    const clickHandler = () => {
        setTitle('changed');
    }
        return (
            <Card className="expense-item">
                <ExpenseDate date={props.exDate} ></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{title}</h2>
                </div>
                <div className="expense-item__price">{props.exPrice}try</div>
                <button className="button" onClick={clickHandler}> Button </button>
            </Card>
        );
    }

export default ExpenseItem;