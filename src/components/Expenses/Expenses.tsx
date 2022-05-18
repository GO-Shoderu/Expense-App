import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";

const Expenses = (props: any) => {
  const expenses = props.data;

  // console.log(expenses[0].date.getFullYear());

  const [options, changeOption] = useState("2022");

  const optionHandler = (option: any) => {
    // console.log(option);

    changeOption(option);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={options} onSelect={optionHandler} />

      {/* {console.log(
        expenses[0].date.getFullYear().toString() === options.toString()
      )} */}

      {expenses
        .filter(
          (expen: any) =>
            expen.date.getFullYear().toString() === options.toString()
        )
        .map((expense: any) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;
