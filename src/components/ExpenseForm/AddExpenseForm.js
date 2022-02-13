import React, { useState } from "react";

import "./AddExpenseForm.css";
import Card from "../Card";
import ExpenseForm from "./ExpenseForm";

const AddExpenseForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const expenseFormProp = (obj) => {
    const expenseWithId = {
      ...obj,
      id: Math.random().toString(),
    };

    props.passObjectToApp(expenseWithId);
  };

  return (
    <Card className="main-form">
      {!isEditing && (
        <button type="button" className="addExp" onClick={startEditingHandler}>
          Add Expense
        </button>
      )}

      {isEditing && (
        <div className="innerCard">
          <ExpenseForm
            onPassObjectToAddExpenseForm={expenseFormProp}
            onCancel={stopEditingHandler}
          />
        </div>
      )}
    </Card>
  );
};

export default AddExpenseForm;
