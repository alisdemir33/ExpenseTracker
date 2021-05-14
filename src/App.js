import logo from './logo.svg';
import './App.css';
import ExpenseList from './components/ExpenseList/ExpenseList'
import NewExpense from './components/NewExpense/NewExpense'
import { useState } from 'react';

const expenseArr = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2019, 5, 12),
  },
];


function App() {

  const [expenseList, setExpenseList] = useState(expenseArr);


  const addExpenseHandler = expenseData => {
    console.log('App get expense');
    console.log(expenseData);  
   
    setExpenseList( (prevState)=>{
      return [expenseData,...prevState ];
    });

    console.log(expenseList);

    

  }

  

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />    
      <ExpenseList  expenses={expenseList}></ExpenseList>;
    </div>
  );
}

export default App;
