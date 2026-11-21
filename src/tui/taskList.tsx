import { Task, type TaskView } from "./task";

export interface TaskListView {
  tasks: TaskView[];
}

export const TaskList = ({ taskListView }: { taskListView: TaskListView }) => {
  return taskListView.tasks.map((task) => <Task taskView={task} />);
};
