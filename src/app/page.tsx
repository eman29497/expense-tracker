import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import Header from "./components/Header"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"
export default function Home(){
  return(
    <div className="min-h-screen items-center justify-center flex bg-gray-200">
      <div className="mt-5 bg-white w-full max-w-md p-2 shadow-2xl justify-center items-center rounded-lg">
    <Header/>
    <Balance/>
    <IncomeExpenses/>
    <TransactionList/>
    <AddTransaction/>
    </div>
    </div>
  )
}