import './App.css';
import AddTransactions from './components/AddTransactions';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalStateSimple'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransactions />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
