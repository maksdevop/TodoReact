import React, { FC } from 'react';

import Task from '../Task/Task.tsx';
import './TaskList.css';

type Todo = {
    id: number;
    name: string;
    completed: boolean;
    createdAt: string;
    minVal: number;
    secVal: number;
};

type TaskListProps = {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleCompletion: (id: number) => void;
    toggleTimer: (id: number) => void;
};

const TaskList: FC<TaskListProps> = ({
    todos,
    deleteTodo,
    toggleCompletion,
    toggleTimer,
}) => (
    <section className="main">
        <ul className="todo-list">
            {todos.map((todo) => (
                <Task
                    toggleTimer={toggleTimer}
                    key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    toggleCompletion={toggleCompletion}
                />
            ))}
        </ul>
    </section>
);

export default TaskList;
