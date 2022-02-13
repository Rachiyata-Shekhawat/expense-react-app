import React from "react";

import "./ExpenseChart.css";
import ChartBar from "./ChartBar";

const ExpenseChart = (props) => {
  const chartArray = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (let index of props.array) {
    const month = index.dateExpense.getMonth();
    chartArray[month].value += index.amountExpense;
  }

  const chartArrayValues = chartArray.map((item) => item.value);
  const maximumVal = Math.max(...chartArrayValues);

  return (
    <div className="chart">
      {chartArray.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          value={item.value}
          maxVal={maximumVal}
        />
      ))}
    </div>
  );
};

export default ExpenseChart;
