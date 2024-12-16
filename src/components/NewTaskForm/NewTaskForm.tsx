import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import './NewTaskForm.css';

type NewTaskFormProps = {
    addTodo: (taskName: string, minVal: number, secVal: number) => void;
};

const NewTaskForm: FC<NewTaskFormProps> = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [inputMinValue, setInputMinValue] = useState<string>('');
    const [inputSecValue, setInputSecValue] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleChangeMin = (e: ChangeEvent<HTMLInputElement>) => {
        setInputMinValue(e.target.value);
    };
    const handleChangeSec = (e: ChangeEvent<HTMLInputElement>) => {
        setInputSecValue(e.target.value);
    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            inputValue.trim() !== '' &&
            Number(inputMinValue) < 60 &&
            Number(inputSecValue) < 60
        ) {
            addTodo(inputValue, Number(inputMinValue), Number(inputSecValue));
        } else throw new Error('Можно ввести значение от 0 до 59');
        setInputValue('');
        setInputMinValue('');
        setInputSecValue('');
    };

    return (
        <div className="wrap">
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                    onChange={handleChange}
                    value={inputValue}
                />
            </form>
            <div className="time">
                <form>
                    <input
                        className="min"
                        placeholder="min"
                        onChange={handleChangeMin}
                        value={inputMinValue}
                    />
                    <input
                        className="sec"
                        placeholder="sec"
                        onChange={handleChangeSec}
                        value={inputSecValue}
                    />
                </form>
            </div>
        </div>
    );
};
export default NewTaskForm;
