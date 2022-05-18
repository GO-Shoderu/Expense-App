import React from "react";
import "./ExpenseForm.css";

import { useState } from "react";

const ExpenseForm = (props: any) => {
  const [enteredTitle, changeEnteredTitle] = useState("");
  const [enteredAmount, changeEnteredAmount] = useState("");
  const [enteredDate, changeEnteredDate] = useState("");

  const titleChangeHandler = (event: any) => {
    changeEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event: any) => {
    changeEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event: any) => {
    changeEnteredDate(event.target.value);
  };

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event: any) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredTitle: event.target.value,
  //     });
  //   };

  //   const amountChangeHandler = (event: any) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredAmount: event.target.value,
  //     });
  //   };

  //   const dateChangeHandler = (event: any) => {
  //     setUserInput({
  //       ...userInput,
  //       enteredDate: event.targe.value,
  //     });
  //   };

  //   better version
  //   const titleChangeHandler = (event: any) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredTitle: event.target.value };
  //     });
  //   };

  //   const amountChangeHandler = (event: any) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredAmount: event.target.value };
  //     });
  //   };

  //   const dateChangeHandler = (event: any) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, enteredDate: event.targe.value };
  //     });
  //   };

  const submitHandler = (event: any) => {
    event.preventDefault();

    // console.log("Clicked!!!");

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    changeEnteredTitle("");
    changeEnteredAmount("");
    changeEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
