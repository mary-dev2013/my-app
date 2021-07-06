//import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expense = [
    { 
      title: 'Tolilet Paper',
      amount: 294.67, 
      data: new Date(2021, 2, 28)
    },
    { title: 'New TV', amount: 294.67, data: new Date(2021, 2, 28)},
    { title: 'Car Insurance', amount: 294.67, data: new Date(2021, 2, 28)},
    { title: 'New Desk', amount: 294.67, data: new Date(2021, 2, 28)},
  ];

  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem 
      title={expense[0].title} 
      amount={expense[0].amount} 
      date={expense[0].date}/>
      <ExpenseItem 
      title={expense[1].title} 
      amount={expense[1].amount} 
      date={expense[1].date}/>
      <ExpenseItem 
      title={expense[2].title} 
      amount={expense[2].amount} 
      date={expense[2].date}/>
      <ExpenseItem 
      title={expense[3].title} 
      amount={expense[3].amount} 
      date={expense[3].date}/>
    </div>
  );
}

export default App;
