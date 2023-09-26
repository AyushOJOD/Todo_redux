import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from '../features/todo/todoSlice.js';

const Todos = () => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();


    return (
        <>
            <div className='flex justify-center items-center font-semibold border-b-4 max-w-sm mx-auto text-lg border-pink-500'>TODOs</div>
            {
                todos.map((todo) =>
                    <li className='mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded-lg mx-auto max-w-lg' key={todo.id}>
                        <div className='text-white'>{todo.text}</div>
                        <button onClick={() => dispatch(removeTodo(todo.id))} className='text-white bg-red-600 border-0 py-1 px-4 focus: outline-none hover:bg-red-900 rounded text-md duration-200'>
                            Delete
                        </button>
                    </li>
                )
            }
        </>
    )
}

export default Todos
