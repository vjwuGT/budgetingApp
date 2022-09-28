import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput,setUserInput] = useState({
  //     enteredTitle: '',
  //     enteredDate: '',
  //     enteredAmount: ''
  // });
  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredTitle: event.target.value};
    // });
  }
  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredDate: event.target.value};
    // });
  }
  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // });
    // setUserInput((prevState) => {
    //     return {...prevState, enteredAmount: event.target.value};
    // });
  }
  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
          <button type = "button" onClick = {props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
