import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate/ExpenseDate'
import Card from '../UI/Card'

const ExpenseItem = (props) => {


    return (
        <Card className="expense-item">
            <ExpenseDate date={props.exDate} ></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.exTitle}</h2>
            </div>
            <div className="expense-item__price">{props.exPrice}try</div>
        </Card>
    );
}
export default ExpenseItem;