import React, { useState } from "react";

import "./App.css";
import AddExpenseForm from "./components/ExpenseForm/AddExpenseForm";
// import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseData from "./components/ExpenseData/ExpenseData";

const DummyArray = [
  {
    id: 'id1',
    titleExpense: "Car",
    amountExpense: 1300,
    dateExpense: new Date(2020, 2, 23),
  },
  {
    id: 'id1',
    titleExpense: "House",
    amountExpense: 1600,
    dateExpense: new Date(2021, 10, 2),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DummyArray);

  const mainObj = (expenses) => {
    setExpenses((oldArray) => [expenses, ...oldArray]);
  };

  return (
    <div>
      <AddExpenseForm passObjectToApp={mainObj} />
      <ExpenseData expenseArray={expenses} />
    </div>
  );
}

export default App;
