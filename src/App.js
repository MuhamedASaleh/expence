import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { Transation } from "./components/Transation";
import { IncomeExpences } from "./components/IncomeExpences";
import { AddTransation } from "./components/AddTransation";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Balance />
        <IncomeExpences />
        <Transation /> 
        <AddTransation />
      </div>
    </div>
  );
}

export default App;
