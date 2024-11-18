import { useState } from 'react';
import './NewTaskForm.css';

function NewTaskForm({ addTodo }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onChange={handleChange}
                value={inputValue}
            />
            ;
        </form>
    );
}
export default NewTaskForm;
