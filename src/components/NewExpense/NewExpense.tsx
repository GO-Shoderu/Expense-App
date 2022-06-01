import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props: any) => {
  const onSaveExpenseDataHandler = (enteredExpenseData: any) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const [clicked, changeState] = useState(false);

  const addExpenseButtonHandler = () => {
    changeState(!clicked);
  };

  return (
    <div className="new-expense">
      {!clicked && (
        <button onClick={addExpenseButtonHandler}>Add New Expense</button>
      )}
      {clicked && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onClick={addExpenseButtonHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
