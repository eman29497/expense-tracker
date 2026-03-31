import {createSlice,PayloadAction} from '@reduxjs/toolkit';
interface Transaction{
    id:number;
    text:string;
    amount:number;
}
interface ExpenseState{
    transactions: Transaction[];
}
const initialState : ExpenseState ={
    transactions: [],
};
const expenseSlice = createSlice({
    name:'expense',
    initialState,
    reducers:{
        addTransaction: (state,action : PayloadAction<Transaction>) =>{
            state.transactions.push(action.payload);
        },
        deleteTransaction: (state,action : PayloadAction<number>) =>{
            state.transactions = state.transactions.filter((t) => t.id !== action.payload);
        },
    },
});
export const {addTransaction,deleteTransaction} = expenseSlice.actions;
export default expenseSlice.reducer;






