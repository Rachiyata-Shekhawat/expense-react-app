import React, { useState } from "react";

import "./ExpenseForm.css";
import Card from "../Card";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const onChangeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const onChangeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const onChangeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const expense = {
      titleExpense: title,
      amountExpense: amount,
      dateExpense: new Date(date),
    };

    props.onPassObjectToAddExpenseForm(expense);

    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="input-section">
        <div className="form-section">
          <label>Title:</label>
          <input type="text" value={title} onChange={onChangeTitleHandler} />
        </div>

        <div className="form-section">
          <label>Amount:</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={onChangeAmountHandler}
          />
        </div>

        <div className="form-section">
          <label>Date:</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={date}
            onChange={onChangeDateHandler}
          />
        </div>
      </div>
      <div className="button-section">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
