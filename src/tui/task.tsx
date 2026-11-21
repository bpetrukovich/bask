import { Box, Text } from "ink";

export interface TaskView {
  title: string;
  level: number;
  subtasks: TaskView[];
}

export const Task = ({ taskView }: { taskView: TaskView }) => {
  const { title, level, subtasks } = taskView;

  const marginLeft = level * 2;
  const isSubtask: boolean = level > 0;

  return (
    <>
      <Box
        borderTop={false}
        borderLeft={isSubtask}
        borderRight={false}
        borderStyle="round"
        borderBottom={false}
        borderColor="cyan"
        marginLeft={marginLeft}
        paddingBottom={1}
      >
        <Box marginLeft={1}>
          <Text bold={true}>{title}</Text>
        </Box>
      </Box>
      {subtasks.map((task) => (
        <Task taskView={task} />
      ))}
    </>
  );
};
