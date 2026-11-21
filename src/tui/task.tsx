import { Box, Text } from "ink";

export interface TaskView {
  title: string;
  level: number;
  description: string | null;
  subtasks: TaskView[];
}

export const Task = ({ taskView }: { taskView: TaskView }) => {
  const { title, level, subtasks, description } = taskView;

  const marginLeft = level * 2;
  const isSubtask: boolean = level > 0;

  return (
    <>
      <Box
        borderTop={false}
        borderLeft={true}
        borderRight={false}
        borderStyle="round"
        borderBottom={false}
        borderColor="cyan"
        marginLeft={marginLeft}
        paddingBottom={1}
      >
        <Box flexDirection="column" marginLeft={1} marginRight={1}>
          <Text bold={true}>{title}</Text>
          {description ? <Text wrap="truncate">{description}</Text> : null}
        </Box>
      </Box>
      {subtasks.map((task) => (
        <Task taskView={task} />
      ))}
    </>
  );
};
