import React, { useState, useEffect } from "react";

type ExpenseData = {
  expenseSource: string;
  amount: string;
  date: string;
};

interface ExpenseProps {
  getTotalExpense: (expense: number) => void;
}

const useInput = () => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange,
  };
};

const Expenses = (props: ExpenseProps) => {
  const [expenseList, setExpenseList] = useState<ExpenseData[]>([]);
  const amountOfExpenses = useInput();
  const expenseSource = useInput();
  const dateOfExpense = useInput();
  const printData = (e: React.FormEvent) => {
    e.preventDefault();
    const newExpense = {
      expenseSource: expenseSource.value,
      amount: amountOfExpenses.value,
      date: dateOfExpense.value,
    };
    setExpenseList([...expenseList, newExpense]);
  };

  useEffect(() => {
    let totalExpense: number = 0;
    for (let item of expenseList) {
      totalExpense += Number(item.amount);
    }
    props.getTotalExpense(totalExpense);
  }, [expenseList]);

  return (
    <form onSubmit={printData}>
      <div>
        <label htmlFor="expenseSource">Expense Source</label>
        <br></br>
        <input
          type="text"
          name="expenseSource"
          id="expenseSource"
          placeholder="Electricity bill"
          {...expenseSource}
        />
      </div>
      <div>
        <label htmlFor="amountOfExpenses">Amount of Expense</label>
        <br></br>
        <input
          type="number"
          name="amountOfExpenses"
          id="amountOfExpenses"
          {...amountOfExpenses}
        />
      </div>
      <div>
        <label htmlFor="dateOfExpense">Date of Expense</label>
        <br></br>
        <input type="date" name="date" id="date" {...dateOfExpense} />
      </div>
      <button type="submit">Add Expense</button>
      <ul>
        {expenseList.map((expense, index) => (
          <li key={index}>
            <div>Income Source: {expense.expenseSource}</div>
            <div>Amount: {expense.amount}EUR</div>
            <div>Date: {expense.date}</div>
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Expenses;
