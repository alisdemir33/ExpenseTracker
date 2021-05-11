import logo from './logo.svg';
import './App.css';
import ExpenseList from './components/ExpenseList/ExpenseList'

function App() {

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
      date: new Date(2021, 5, 12),
    },
  ];  

  const expenseList =  <ExpenseList expenses={expenseArr}></ExpenseList>;
  return (
    <div className="App">
      <h1>lets start</h1>
      {expenseList}
    </div>
  );
}

export default App;
