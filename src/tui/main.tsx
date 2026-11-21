import { render, Box } from "ink";
import { useFullScreen } from "./useFullScreen";
import { TaskList, type TaskListView } from "./taskList";

const App = () => {
  const screenSize = useFullScreen();

  const tasks: TaskListView = {
    tasks: [
      {
        title: "first task",
        description: "Description some long long long text",
        subtasks: [
          {
            title: "Subtask",
            description:
              "Description some long lDescription some long long long textDescription some long long long textong long text",
            subtasks: [
              {
                title: "Another subtask",
                description: "Description some long long long text",
                subtasks: [
                  {
                    title: "Third subtask",
                    description: null,
                    subtasks: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      { title: "second task", description: null, subtasks: [] },
      {
        title: "first task",
        description: "Description some long long long text",
        subtasks: [
          {
            description: null,
            title: "Subtask",
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
