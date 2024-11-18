import Task from '../Task/Task';
import './TaskList.css';

function TaskList({ todos, deleteTodo, toggleCompletion, date }) {
    return (
        <section className="main">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <Task
                        date={date}
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleCompletion={toggleCompletion}
                    />
                ))}
            </ul>
        </section>
    );
}

export default TaskList;
