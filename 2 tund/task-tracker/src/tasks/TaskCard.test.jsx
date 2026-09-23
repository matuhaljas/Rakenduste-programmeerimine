// @vitest-environment jsdom
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import TaskCard from './TaskCard';

const task = { id: 1, text: 'Finish homework', completed: false };

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('TaskCard', () => {
  it('displays the task title', () => {
    renderWithRouter(
      <TaskCard task={task} onToggle={() => {}} onDelete={() => {}} />
    );

    expect(screen.getByText('Finish homework')).toBeInTheDocument();
  });

  it('calls onToggle with the task id when the checkbox is clicked', async () => {
    const user = userEvent.setup();
    const handleToggle = vi.fn();

    renderWithRouter(
      <TaskCard task={task} onToggle={handleToggle} onDelete={() => {}} />
    );

    await user.click(screen.getByRole('checkbox'));

    expect(handleToggle).toHaveBeenCalledTimes(1);
    expect(handleToggle).toHaveBeenCalledWith(task.id);
  });
});