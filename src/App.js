//import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expense = [
    { 
      title: 'Car Insurance',
      amount: 294.67, 
      data: new Date(2021, 2, 28)
    },
    { title: 'Car Insurance', amount: 294.67, data: new Date(2021, 2, 28)},
    { title: 'Car Insurance', amount: 294.67, data: new Date(2021, 2, 28)},
    { title: 'Car Insurance', amount: 294.67, data: new Date(2021, 2, 28)},
  ];

  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem/>
      <ExpenseItem/>
      <ExpenseItem/>
      <ExpenseItem/>
    </div>
  );
}

export default App;
