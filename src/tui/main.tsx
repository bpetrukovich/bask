import { render, Box, Text } from "ink";
import { useFullScreen } from "./useFullScreen";
import { create } from "zustand";

const useTaskSelection = create();

const App = () => {
  const screenSize = useFullScreen();

  return (
    <Box
      width={screenSize.columns}
      height={screenSize.rows}
      borderStyle="round"
      borderColor="cyan"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="40%"
        height="100%"
        borderStyle="round"
        borderColor="cyan"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Text>
          full screen: {screenSize.columns}x{screenSize.rows}
        </Text>
      </Box>
    </Box>
  );
};

export async function blockedRender() {
  const { waitUntilExit } = render(<App />);
  await waitUntilExit();
}
