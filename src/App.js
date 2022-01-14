import './App.css';
import AddTransctions from './components/AddTransctions';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpances from './components/IncomeExpances';
import TransctionList from './components/TransctionList';
import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExpances />
          <TransctionList />
          <AddTransctions />
        </div>
      </GlobalProvider>
    </div>
  );
}

export default App;
