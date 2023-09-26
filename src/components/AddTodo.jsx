import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice.js';

const AddTodo = () => {

    const [data, setData] = useState('');
    const dispatch = useDispatch()

    //adding the handlers
    const addTodoHandler = (e) => {
        e.preventDefault()

        dispatch(addTodo(data));
        setData('')
    }


    return (
        <form className='space-x-3 mt-12 flex items-center justify-center' onSubmit={addTodoHandler}>
            <input type="text" className='bg-gray-800 text-white rounded border border-gray-700 py-1 px-3' placeholder='Enter a todo..' value={data} onChange={e => setData(e.target.value)} />
            <button type="submit" className='bg-green-500 rounded-lg py-2 px-6 hover:bg-green-800 duration-200'>Add</button>
        </form>
    )
}

export default AddTodo
