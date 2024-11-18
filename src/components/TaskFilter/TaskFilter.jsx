import './TaskFilter.css';

function TaskFilter({ setFilter, filter }) {
    return (
        <ul className="filters">
            <li>
                <button
                    type="button"
                    className={filter === 'all' ? 'selected' : ''}
                    onClick={() => setFilter('all')}
                >
                    All
                </button>
            </li>
            <li>
                <button
                    type="button"
                    className={filter === 'active' ? 'selected' : ''}
                    onClick={() => setFilter('active')}
                >
                    Active
                </button>
            </li>
            <li>
                <button
                    type="button"
                    className={filter === 'completed' ? 'selected' : ''}
                    onClick={() => setFilter('completed')}
                >
                    Completed
                </button>
            </li>
        </ul>
    );
}

export default TaskFilter;
