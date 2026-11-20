import { render, Box, Text } from "ink";
import { useFullScreen } from "./useFullScreen";

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

const { waitUntilExit } = render(<App />);

await waitUntilExit();
