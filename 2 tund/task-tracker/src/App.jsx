import { useEffect, useRef, useState } from 'react';
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { getTasks } from './services/taskApi';
import TaskForm from './tasks/TaskForm';
import TaskList from './tasks/TaskList';
import TaskDetails from './tasks/TaskDetails';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const nextId = useRef(1);

  useEffect(() => {
    async function loadTasks() {
      try {
        const loadedTasks = await getTasks();
        setTasks(loadedTasks);
        nextId.current = loadedTasks.reduce((maxId, task) => Math.max(maxId, task.id), 0) + 1;
      } catch {
        setError('Failed to load tasks.');
      } finally {
        setLoading(false);
      }
    }

    loadTasks();
  }, []);

  function handleAdd(text) {
    const newTask = { id: nextId.current++, text, completed: false };
    setTasks(prev => [...prev, newTask]);
  }

  function handleToggle(id) {
    setTasks(prev =>
      prev.map(task => (task.id === id ? { ...task, completed: !task.completed } : task))
    );
  }

  function handleDelete(id) {
    setTasks(prev => prev.filter(task => task.id !== id));
  }

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Tasks</h1>
              {error && <p>{error}</p>}
              <TaskForm onAdd={handleAdd} />

              <div>
                <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
                  All
                </button>
                <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
                  Completed
                </button>
                <button onClick={() => setFilter('incomplete')} disabled={filter === 'incomplete'}>
                  Incomplete
                </button>
              </div>

              {loading ? (
                <p>Loading tasks...</p>
              ) : (
                <TaskList tasks={filteredTasks} onToggle={handleToggle} onDelete={handleDelete} />
              )}
            </div>
          }
        />

        <Route path="/tasks/:taskId" element={<TaskDetails tasks={tasks} />} />

        <Route
          path="*"
          element={
            <div>
              <h1>Page not found</h1>
              <Link to="/">Back to tasks</Link>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}
