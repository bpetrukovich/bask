import { Task, type FlatTaskView } from "./task";

export interface TaskView {
  title: string;
  description: string | null;
  subtasks: TaskView[];
}

export interface TaskListView {
  tasks: TaskView[];
}

export const TaskList = ({ taskListView }: { taskListView: TaskListView }) => {
  const flatTaskList = flatTasks(taskListView.tasks);

  return flatTaskList.map((task) => <Task taskView={task} />);
};

function flatTasks(tasks: TaskView[]): FlatTaskView[] {
  const result: FlatTaskView[] = [];

  const dfs = (tasks: TaskView[], level = 0) => {
    for (const node of tasks) {
      result.push({
        title: node.title,
        level,
        description: node.description,
        isGrey: false,
      });
      if (node.subtasks.length > 0) {
        dfs(node.subtasks, level + 1);
      }
    }
  };

  dfs(tasks);

  result
    .filter((_, i) => i % 2)
    .forEach((task) => {
      task.isGrey = true;
    });

  return result;
}
