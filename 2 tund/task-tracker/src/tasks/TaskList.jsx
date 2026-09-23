import TaskCard from './TaskCard';

export default function TaskList({ tasks, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p>No tasks found</p>;
  }

  return (
    <ul>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}