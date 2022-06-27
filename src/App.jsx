import { useState } from "react";
import ExpenseCard from "./Components/Expense/ExpenseCard";
import ExpenseForm from "./Components/Expense/ExpenseForm";
import Header from "./Components/Header/Header";
import ExpenseFilter from "./Components/Expense/ExpenseFilter";


function App() {

  const dummyExpenseData = [

    {
      id: "e1",
      date: new Date(2022, 2, 18),
      title: 'Car Insurance',
      price: 290,
    },
    {
      id: "e2",
      date: new Date(2022, 3, 18),
      title: 'Flat Rent',
      price: 390,
    }, {
      id: "e3",
      date: new Date(2021, 2, 30),
      title: 'Internet Fees',
      price: 210,
    }, {
      id: "e4",
      date: new Date(2020, 4, 8),
      title: 'Bank Loan',
      price: 100,
    }
  ]

  // const newExpenseData=(expense)=>{
  //   expenseData.push(expense);
  //   console.log(expenseData)
  // }

  const [expenses, setExpenses] = useState(dummyExpenseData);
  const [selectedYear,setSelectedYear] = useState("2020");
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  }
  const expenseFilterHandler = year =>{
    setSelectedYear(year)
    console.log(year);
  }
  const filteredExpenses = expenses.filter(expense =>{
    return expense.date.getFullYear().toString() === selectedYear;
  })

  let expensesContent = <p>No expense found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseCard key={expense.id} date={expense.date} title={expense.title} amount={expense.price} />
    })
  }

  const renderExpenseCards = expensesContent;

  return (
    <div className="flex flex-col items-center">
      <Header />
      <ExpenseForm onNewExpense={addExpenseHandler} />
      <ExpenseFilter selected ={selectedYear} onYearChange={expenseFilterHandler}/>
      {renderExpenseCards}
    </div>
  );
}

export default App;
