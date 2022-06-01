import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

const Expenses = (props: any) => {
  const expenses = props.data;

  // console.log(expenses[0].date.getFullYear());

  const [options, changeOption] = useState("2022");

  const optionHandler = (option: any) => {
    // console.log(option);

    changeOption(option);
  };

  // non complex way of filtering
  const filteredExpenses = expenses.filter((expen: any) => {
    return expen.date.getFullYear().toString() === options.toString();
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={options} onSelect={optionHandler} />
      <ExpensesList data={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
