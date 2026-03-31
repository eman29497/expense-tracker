'use client';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
export default function Balance(){
    const transactions = useSelector((state: RootState)=> state.expense.transactions);
    const amounts = transactions.map(t => t.amount);
    const total = amounts.reduce((acc,item) => (acc += item),0).toFixed(2);
    return(
        <div className="ml-12 mt-5 flex flex-col">
            <h2 className="text-black text-3xl">Your Balance</h2>
            <h3 className="text-black font-bold text-4xl">${total}</h3>
        </div>
    );
};

