'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
export default function IncomeExpenses(){
    const transactions = useSelector((state: RootState)=> state.expense.transactions);
    const amounts = transactions.map(t => t.amount);
    const income = amounts 
    .filter(item =>item >0)
    .reduce((acc,item)=>(acc += item),0)
    .toFixed(2);
    const expense = (amounts.filter(item =>item < 0). reduce((acc,item)=> (acc += item),0) * -1).toFixed(2);
    return(
        <div className="flex gap-3 justify-center items-center mt-5">
            <div className="w-50 shadow-lg bg-white flex flex-col justify-center items-center">
            <h2 className="text-3xl text-black">INCOME</h2>
            <h3 className="text-green-500 text-2xl">${income}</h3>
            </div>
             <div className="w-50 shadow-lg bg-white flex flex-col justify-center items-center">
            <h2 className="text-3xl text-black">EXPENSE</h2>
            <h3 className="text-red-500 text-2xl">${expense}</h3>
            </div>
        </div>
    );
};
