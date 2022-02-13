import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectYearHandler = (event) => {
    props.filteredYearValue(event.target.value);
  };

  return (
    <div className="flex">
      <select onChange={selectYearHandler}>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
