import { render, Box, Text } from "ink";
import { useFullScreen } from "./useFullScreen";
import { create } from "zustand";
import { TaskList, type TaskListView } from "./taskList";
import type { TaskView } from "./task";

const useTaskSelection = create();

const App = () => {
  const screenSize = useFullScreen();

  const tasks: TaskListView = {
    tasks: [
      {
        title: "first task",
        level: 0,
        description: "Description some long long long text",
        subtasks: [
          {
            title: "Subtask",
            level: 1,
            description:
              "Description some long lDescription some long long long textDescription some long long long textong long text",
            subtasks: [
              {
                title: "Another subtask",
                level: 2,
                description: "Description some long long long text",
                subtasks: [
                  {
                    title: "Third subtask",
                    level: 3,
                    description: null,
                    subtasks: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      { title: "second task", level: 0, description: null, subtasks: [] },
      {
        title: "first task",
        level: 0,
        description: "Description some long long long text",
        subtasks: [
          {
            description: null,
            title: "Subtask",
            level: 1,
            subtasks: [],
          },
        ],
      },
    ],
  };

  return (
    <Box
      width={screenSize.columns}
      height={screenSize.rows}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="40%"
        height="100%"
        borderStyle="round"
        borderColor="cyan"
        borderTop={false}
        borderBottom={false}
        flexDirection="column"
      >
        <TaskList taskListView={tasks} />
      </Box>
    </Box>
  );
};

export async function blockedRender() {
  const { waitUntilExit } = render(<App />);
  await waitUntilExit();
}
