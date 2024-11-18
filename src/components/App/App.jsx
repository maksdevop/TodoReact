import './App.css';
import { useState } from 'react';
import TaskList from '../TaskList/TaskList';
import Header from '../Header/Header';
import NewTaskForm from '../NewTaskForm/NewTaskForm';
import Footer from '../Footer/Footer';

function App() {
    const [todos, setTodos] = useState([]);
    const [nextId, setNextId] = useState(1);
    const [filter, setFilter] = useState('all');
    12;
    const addTodo = (taskName) => {
        const newTask = {
            id: nextId,
            name: taskName,
            completed: false,
            createdAt: new Date(),
        };
        setTodos([...todos, newTask]);
        setNextId(nextId + 1);
    };
    const toggleCompletion = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        );
    };
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const setFilterStatus = (status) => {
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
}

export default App;