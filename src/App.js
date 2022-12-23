import React, { useState } from "react";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSE=[
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
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

const App = () => {
  const [expenses, setExpense]=useState(DUMMY_EXPENSE)
  const saveExpenseHandler = (expenseData)=>{
    const newExpenseData = {
      id:Math.random().toString(),
      ...expenseData
    }
    setExpense((prevExpenses)=>{
      return [newExpenseData, ...prevExpenses]
    })
  }
  return (
    <div>
      <h2>Let's get started!</h2>
      <p>Test</p>
      <NewExpense onSaveExpenseData={saveExpenseHandler}></NewExpense>
      <Expense expenses={expenses} />
    </div>
  );
  // How Jsx works Behind the scene
  // React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expense, { expenses: expenses })
  // );
};

export default App;
