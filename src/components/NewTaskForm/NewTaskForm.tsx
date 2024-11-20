import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './NewTaskForm.css';

type NewTaskFormProps = {
    addTodo: (taskName: string) => void;
};

const NewTaskForm: FC<NewTaskFormProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
        </form>
    );
};
export default NewTaskForm;
