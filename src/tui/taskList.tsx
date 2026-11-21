import { useState } from "react";
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
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const flatTaskList = flatTasks(taskListView.tasks);

  return flatTaskList.map((task, i) => (
    <Task
      isGrey={!!(i % 2)}
      isSelected={i === selectedItemIndex}
      taskView={task}
    />
  ));
};

function flatTasks(tasks: TaskView[]): FlatTaskView[] {
  const result: FlatTaskView[] = [];

  const dfs = (tasks: TaskView[], level = 0) => {
    for (const node of tasks) {
      result.push({
        title: node.title,
        level,
        description: node.description,
      });
      if (node.subtasks.length > 0) {
        dfs(node.subtasks, level + 1);
      }
    }
  };

  dfs(tasks);

  return result;
}
