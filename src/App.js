import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [newExpenses, setNewExpenses] = useState(expenses);
  // const [filterYears, setFilterYears] = useState("2020");

  const addExpenseHandler = (expense) => {
    setNewExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  // const chooseItem = (expense) => {
  //   return expense.filter((item) =>
  //     String(filterYears) === "All"
  //       ? true
  //       : String(item.date.getFullYear()) === String(filterYears)
  //       ? true
  //       : null
  //   );
  // };
  // const yearsAgo = (years) => {
  //   setFilterYears(years);
  // };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={newExpenses}/>
    </div>
  );
}

export default App;
