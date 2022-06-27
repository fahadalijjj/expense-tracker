import React, { useState } from 'react'

function ExpenseForm(props) {

    const [showForm,setShowForm] = useState(false);
    const [enteredTitle,setEnteredTitle] = useState('');
    const [enteredPrice,setEnteredPrice] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    
    const titleEventHandler = (event)=>{
        // console.log(event.target.value);
       setEnteredTitle(event.target.value);
    
    }

    const priceEventHandler = (event)=>{
        setEnteredPrice(event.target.value)}

    const dateEventHandler = (event)=>{
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const newExpenseData = {
            id: Math.random().toString(),
            title: enteredTitle,
            price: enteredPrice,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);
         props.onNewExpense(newExpenseData);
         setEnteredTitle('');
         setEnteredPrice('');
         setEnteredDate('');
         setShowForm(false);
    }
    const showFormHandler = ()=> {
        setShowForm(true);
    }
    const cancelHandler = () =>{
        setShowForm(false);
    }
    return (
        <div>
            
            { showForm?
                <form>
                <div>
                <div>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleEventHandler} />
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" value={enteredPrice} min='0.01' step='0.01' onChange={priceEventHandler}/>
                </div>
                <div>
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateEventHandler}/>
                </div>
            </div>
            <div>
                <button type="submit" onClick={submitHandler}>Add Expense</button>
                <button type='button' onClick={cancelHandler}>Cancel</button>
            </div>
        </form>
            :<button onClick={showFormHandler}>Add NEW EXPENSE</button>}
        </div>
    
  )
}

export default ExpenseForm