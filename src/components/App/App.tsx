import React, { FC, useEffect, useState } from 'react';
import './App.css';
import TaskList from '../TaskList/TaskList.tsx';
import Header from '../Header/Header.tsx';
import NewTaskForm from '../NewTaskForm/NewTaskForm.tsx';
import Footer from '../Footer/Footer.tsx';

type Todo = {
    name: string;
    completed: boolean;
    createdAt: string;
    id: number;
    minVal: number;
    secVal: number;
    isActive: boolean;
};

const App: FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [nextId, setNextId] = useState<number>(1);
    const [filter, setFilter] = useState<string>('all');

    const addTodo = (taskName: string, minVal: number, secVal: number) => {
        const newTask = {
            id: nextId,
            name: taskName,
            completed: false,
            createdAt: new Date().toISOString(),
            minVal: minVal || 0,
            secVal: secVal || 0,
            isActive: false,
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

    useEffect(() => {
        const intervals = todos.map((todo) => {
            if (todo.isActive) {
                return setInterval(() => {
                    setTodos((prevTodos) =>
                        prevTodos.map((t) =>
                            t.id === todo.id
                                ? (() => {
                                      if (t.secVal > 0) {
                                          return { ...t, secVal: t.secVal - 1 };
                                      }
                                      if (t.minVal > 0) {
                                          return {
                                              ...t,
                                              minVal: t.minVal - 1,
                                              secVal: 59,
                                          };
                                      }
                                      return t;
                                  })()
                                : t,
                        ),
                    );
                }, 1000);
            }
            return null;
        });
        return () => {
            intervals.forEach(
                (interval) => interval && clearInterval(interval),
            );
        };
    }, [todos]);

    const toggleTimer = (id: number) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, isActive: !todo.isActive } : todo,
            ),
        );
    };

    return (
        <section className="todoapp">
            <Header />
            <NewTaskForm addTodo={addTodo} />
            <TaskList
                toggleTimer={toggleTimer}
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
