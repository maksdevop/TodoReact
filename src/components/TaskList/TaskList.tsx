import React, { FC } from 'react';

import Task from '../Task/Task';
import './TaskList.css';

type Todo = {
    id: number;
    name: string;
    completed: boolean;
    createdAt: string;
};

type TaskListProps = {
    todos: Todo[];
    deleteTodo: (id: number) => void;
    toggleCompletion: (id: number) => void;
};

const TaskList: FC<TaskListProps> = ({
    todos,
    deleteTodo,
    toggleCompletion,
}) => {
    return (
        <section className="main">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Task
                        // date={date}
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleCompletion={toggleCompletion}
                    />
                ))}
            </ul>
        </section>
    );
};

export default TaskList;
