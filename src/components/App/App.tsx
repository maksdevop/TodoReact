import React, { FC } from 'react';
import './App.css';
import { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import Header from '../Header/Header';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';

type Todo = {
    name: string;
    completed: boolean;
    createdAt: string;
    id: number;
};

const App: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [nextId, setNextId] = useState<number>(1);
    const [filter, setFilter] = useState<string>('all');
    const addTodo = (taskName: string) => {
        const newTask = {
            id: nextId,
            name: taskName,
            completed: false,
            createdAt: new Date().toISOString(),
        };
        setTodos([...todos, newTask]);
        setNextId(nextId + 1);
    };
    const toggleCompletion = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };
    const deleteTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const setFilterStatus = (status: string) => {
        setFilter(status);
    };
    const filteredTodos = todos.filter((todo) => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });
    return (
        <section className="todoapp">
            <Header />
            <NewTaskForm addTodo={addTodo} />
            <TaskList
                todos={filteredTodos}
                deleteTodo={deleteTodo}
                toggleCompletion={toggleCompletion}
            />
            <Footer
                todos={todos}
                setTodos={setTodos}
                filter={filter}
                setFilter={setFilterStatus}
            />
        </section>
    );
};

export default App;
