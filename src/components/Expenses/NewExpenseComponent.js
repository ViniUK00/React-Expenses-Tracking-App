import { useState } from "react";
import Card from "../UI/card";
import ExpenseItem from "./ExpenseItem"
import ExpensesChart from "./ExpensesChart";
import './NewExpenseComponent.css'
import ExpenseFilter from "../FiltrerComponent/ExpensesFilter"

function NewExpenseComponent(props) {
    const [filteredYear, setFilteredYear ] = useState('2020');
    
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <Card className="expenses">
            
            <ExpenseFilter selected={filteredYear} onChangeFilter = {filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            {filteredExpenses.length === 0 ? <p>No expenses found.</p> : filteredExpenses.map((expense) => (
            <ExpenseItem
            key={expense.id}
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            />
            ))}
            
        </Card>
    );
}

export default NewExpenseComponent;