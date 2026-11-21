import { Box, Text } from "ink";

export interface FlatTaskView {
  title: string;
  level: number;
  description: string | null;
}

export const Task = ({
  taskView,
  isGrey,
  isSelected,
}: {
  taskView: FlatTaskView;
  isGrey: boolean;
  isSelected: boolean;
}) => {
  const { title, level, description } = taskView;

  const marginLeft = level * 2;

  const backgroundColor = isGrey ? "#222222" : undefined;

  return (
    <Box
      borderTop={false}
      borderLeft={true}
      borderRight={false}
      borderStyle="round"
      borderBottom={false}
      borderColor={isSelected ? "magenta" : "cyan"}
      marginLeft={marginLeft}
      paddingBottom={1}
      backgroundColor={backgroundColor}
    >
      <Box flexDirection="column" marginLeft={1} marginRight={1}>
        <Text bold={true}>{title}</Text>
        {description ? (
          <Text dimColor wrap="truncate">
            {description}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
};
