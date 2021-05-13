import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css' ;
import Header from '../Header/Header'
import Card from '../UI/Card'

const ExpenseList = (props) => {
    const expenseList = props.expenses.map((currExpense) => {
        return (
            <ExpenseItem
                exDate={currExpense.date}
                exTitle={currExpense.title}
                exPrice={currExpense.amount}>
            </ExpenseItem>);
    })

    return <Card className="expenses">
       <Header count={props.listCount} text ="Expense List"></Header>
        {expenseList}
        </Card>;
}
export default ExpenseList;