import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAction, updateIndexAction } from '../actions';


const Transaction = ({ tr }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteAction(tr.id))
    }
    const handleEdit = () => {
        dispatch(updateIndexAction(tr.id))
    }

    return (
        <tr>
            <td>{tr.accountNumber}</td>
            <td>{tr.FSC}</td>
            <td>{tr.name}</td>
            <td>{tr.amount}</td>
            <td><button onClick={handleEdit}>edit</button></td>
            <td><button onClick={handleDelete}>delete</button></td>
        </tr>
    )
}

const TransactionList = () => {
    const transactions = useSelector(state => state.list)
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Account</th>
                    <th>FSC</th>
                    <th>Name</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions.map((tr, i) => <Transaction tr={tr} key={i} />)}
            </tbody>
        </table>
    );
};

export default TransactionList;