import React from 'react';

import './Footer.css';
import TaskFilter from '../TaskFilter/TaskFilter.tsx';

const Footer = ({ setTodos, setFilter, filter, todos }) => {
    const completedTodoArr = todos.filter((todo) => !todo.completed);
    const completedTodo = todos.reduce(
        (acc, cur) => acc + Number(!cur.completed),
        0,
    );
    return (
        <footer className="footer">
            <span className="todo-count">{completedTodo} items left</span>
            <TaskFilter filter={filter} setFilter={setFilter} />
            <button
                type="button"
                onClick={() => setTodos(completedTodoArr)}
                className="clear-completed"
            >
                Clear completed
            </button>
        </footer>
    );
};

export default Footer;
