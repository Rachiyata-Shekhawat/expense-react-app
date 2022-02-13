import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  return (
    <div className="expenseItemDiv">
      {props.expenseArrayForList.length == 0 && (
        <p className="fallBack"> There is no expense</p>
      )}
      {props.expenseArrayForList.length !== 0 &&
        props.expenseArrayForList.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.titleExpense}
            amount={item.amountExpense}
            date={item.dateExpense}
          />
        ))}
    </div>
  );
};

export default ExpenseList;
