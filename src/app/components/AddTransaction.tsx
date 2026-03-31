'use client';
import { useState } from "react";
import  {addTransaction}  from "@/app/store/expenseSlice";
import { useDispatch } from "react-redux";
export default function AddTransaction(){
    const [text,setText] = useState('');
    const [amount,setAmount] = useState('');
    const dispatch = useDispatch();
    const onSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        if(!text || !amount) return alert('Please fill add text and amount');
        const newTransaction = {
            id:Date.now(),
            text,
            amount: +amount 
        };
        dispatch(addTransaction(newTransaction));
        setText('');
        setAmount('');
    };
    return(
        <div className="mt-8 mb-10">
            <h3 className="text-lg font-semibold border-b-2 ml-8 border-gray-200 ">Add new transaction</h3>
         <div className="mt-5 justify-center items-center flex flex-col">
        <form onSubmit={onSubmit}>
            <div className="mb-4 ">
                <label className="text-2xl font-medium text-gray-700">
                    Text <br />
                </label>
                <input
                type="text"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                placeholder="Enter text here..."
                className="w-80 p-2 border border-gray-300 rounded"
                />
            </div>
   <div className="mb-4 ">
                <label className="text-2xl font-medium text-gray-700">
                Amount <br />
                </label>
                <input
                type="number"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                placeholder="Enter amount Here..."
                className="w-80 p-2 border border-gray-300 rounded"
                />
            </div>
            <button className="bg-purple-600 mt-3 w-80 rounded text-2xl text-white hover:bg-purple-700">Add Transaction</button>
        </form>
        </div>
        </div>
    )  
}