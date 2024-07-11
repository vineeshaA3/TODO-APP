import React from 'react';
import { useSelector } from 'react-redux';
import  TodoItem  from './TodoItem'; // <-- Named import

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos ;
        const filter = state.filter ;
        const searchTerm = state.searchTerm ? state.searchTerm.toLowerCase() : '';

        return todos.filter((todo) => {
            const matchesFilter = 
                (filter === 'COMPLETED' && todo.completed) || 
                (filter === 'INCOMPLETE' && !todo.completed) || 
                (filter === 'ALL');
            const matchesSearch = todo.text.toLowerCase().includes(searchTerm);
            return matchesFilter && matchesSearch;
        });
    });
   console.log('Filtered Todos:',filteredTodos);
    return (
        <ul>
            <li className="my-2 text-sm italic">All your Notes are here......</li>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
        </ul>
    );
};

export default TodoList;
