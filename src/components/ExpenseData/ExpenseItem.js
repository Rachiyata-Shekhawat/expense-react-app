import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const days = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expenseItem">
      <div className="itemDate">
        <div className="itemDay">{days}</div>
        <div className="itemMonth">{month}</div>
        <div className="itemYear">{year}</div>
      </div>
      <div className="itemContent">
        <div className="itemTitle">{props.title}</div>
        <div className="itemAmount">{props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
