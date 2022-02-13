import React, { useState } from "react";

import Card from "../Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import ExpenseList from "./ExpenseList";

const ExpenseData = (props) => {
  const [year, setFilterYear] = useState(2020);

  const filteredArrayHandler = (newYear) => {
    setFilterYear(newYear);
  };

  const filteredArray = props.expenseArray.filter((index) => {
    return index.dateExpense.getFullYear().toString() === year;
  });

  console.log(props.expenseArray);

  return (
    <Card class="flex">
      <ExpenseFilter filteredYearValue={filteredArrayHandler} />
      <ExpenseChart array={filteredArray}/>
      <ExpenseList expenseArrayForList={filteredArray} />
    </Card>
  );
};

export default ExpenseData;
