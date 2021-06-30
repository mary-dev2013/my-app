//import logo from './logo.svg';
import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const para = document.createElement('p');
  para.textContent = 'This is also visible';
  document.getElementById('root').append(para);
  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem/>
    </div>
  );
}

export default App;
