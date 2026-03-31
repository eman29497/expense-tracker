'use client';
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { deleteTransaction } from "../store/expenseSlice";
export default function TransactionList(){
    const transactions = useSelector((state: RootState)=> state.expense.transactions);
    const dispatch = useDispatch();
    return(
        <div>
            <h2 className="text-black text-3xl ml-10 mt-4 border-b-2 border-gray-200">History</h2>
             <div className="justify-center items-center flex flex-col mt-5">
            <ul className="space-y-3">
                {transactions.map((t)=>(
                    <li key={t.id} className={`flex justify-between p-2 border-r-4 bg-white shadow-sm relative ${
                        t.amount < 0 ? 'border-red-500' : 'border-green-500'
                    }`}
                    >
                        <span>{t.text}</span>
                        <span>{t.amount < 0 ? '_' : '+'}${t.amount < 0 ? -t.amount : t.amount}</span>
                        <button onClick={()=>dispatch(deleteTransaction(t.id))}
                            className="absolute -left-8 bg-red-500 text-white px-2 hover:bg-red-600">x</button>
                    </li>
                ))}


            </ul>
        </div>
        </div>
    );
};