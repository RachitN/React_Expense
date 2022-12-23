import "./Expense.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";
function Expense(props) {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
    console.log(year);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear.toString();
  });
  // We can have JSX inside a variable
  // let expenseContent = <p>No Expense Found</p>;
  // if (filteredExpenses.length > 0) {
  //   expenseContent = filteredExpenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  // }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearChange={yearChangeHandler}
      ></ExpensesFilter>
      {/* {props.expenses
        .filter((expense) => expense.date.getFullYear() == selectedYear)
        .map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))} */
        // expenseContent
      }
      <ExpenseChart expenses = {filteredExpenses}/>
      <ExpenseList expenses = {filteredExpenses}></ExpenseList>
    </Card>
  );
}

export default Expense;
