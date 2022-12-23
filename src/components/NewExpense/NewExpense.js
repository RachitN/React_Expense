import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props)=>{
    const saveExpenseHandler = (expenseData)=>{
        props.onSaveExpenseData(expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseHandler}></ExpenseForm>
    </div>
}

export default NewExpense