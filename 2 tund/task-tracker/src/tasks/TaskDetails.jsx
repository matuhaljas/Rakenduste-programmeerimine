import { Link, useParams } from 'react-router-dom';

export default function TaskDetails({ tasks }) {
  const { taskId } = useParams();
  const task = tasks.find(item => item.id === Number(taskId));

  if (!task) {
    return (
      <div>
        <h1>Task not found</h1>
        <Link to="/">Back to tasks</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{task.text}</h1>
      <p>{task.completed ? 'Completed' : 'Not completed'}</p>
      <Link to="/">Back to tasks</Link>
    </div>
  );
}
