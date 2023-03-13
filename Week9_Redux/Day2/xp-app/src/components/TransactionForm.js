import React, { useState, useEffect } from 'react';
import { addTransationAction, updateAction, updateIndexAction } from '../actions/';
import { useDispatch, useSelector } from 'react-redux';

const TransactionForm = () => {
    const [formData, setFormData] = useState({
        accountNumber: '',
        FSC: '',
        name: '',
        amount: ''
    })

    const dispatch = useDispatch()
    const currentIndex = useSelector(state => state.currentIndex)
    const transactions = useSelector(state => state.list)

    useEffect(() => {
        if (currentIndex) {
            setFormData({ ...transactions.find(tr => tr.id === currentIndex) })
        }
        localStorage.setItem('state', JSON.stringify({list: transactions, currentIndex}))
    }, [currentIndex, transactions])

    const handleChange = (e) => {
        setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (currentIndex) {
            console.log('this branch')
            dispatch(updateAction(formData))
            dispatch(updateIndexAction(''))
        } else {
            dispatch(addTransationAction(formData))
        }
        setFormData({
            accountNumber: '',
            FSC: '',
            name: '',
            amount: ''
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='accountNumber' placeholder='account number' value={formData.accountNumber} onChange={handleChange} />
            <input type='text' name='FSC' placeholder='FSC' onChange={handleChange} value={formData.FSC} />
            <input type='text' name='name' placeholder='name' onChange={handleChange} value={formData.name} />
            <input type="number" min="0.00" max="10000.00" step="0.01" name='amount' placeholder='amount' onChange={handleChange} value={formData.amount} />
            <button>Submit</button>
        </form>
    );
};

export default TransactionForm;