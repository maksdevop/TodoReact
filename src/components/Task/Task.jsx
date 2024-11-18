import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css';

function Task({ todo, deleteTodo, toggleCompletion }) {
    const [isUpdate, setIsUpdate] = useState();
    const [inputValue, setInputValue] = useState(todo.name);
    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleUpdateTaskEnter = (e) => {
        if (e.key === 'Enter') {
            setIsUpdate(!isUpdate);
        }
        if (e.key === 'Escape') {
            setInputValue(todo.name);
            setIsUpdate(!isUpdate);
        }
    };
    const handleUpdateTask = () => {
        setIsUpdate(!isUpdate);
    };

    return (
        <li className={todo.completed ? 'completed' : 'active'}>
            <div className="view">
                <label>
                    {!isUpdate ? (
                        <div className="view__wrap">
                            <span
                                onClick={() => toggleCompletion(todo.id)}
                                className="description"
                            >
                                {inputValue}
                            </span>
                            <p className="created">
                                Created{' '}
                                {formatDistanceToNow(new Date(todo.createdAt), {
                                    addSuffix: true,
                                })}
                            </p>
                        </div>
                    ) : (
                        <input
                            onKeyUp={handleUpdateTaskEnter}
                            type="text"
                            autoFocus
                            className="edit"
                            value={inputValue}
                            onChange={handleChange}
                        />
                    )}
                </label>
                <button
                    type="button"
                    onClick={handleUpdateTask}
                    className="icon icon-edit"
                />
                <button
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    className="icon icon-destroy"
                />
            </div>
        </li>
    );
}

export default Task;
