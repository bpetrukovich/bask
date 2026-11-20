import { useStdout } from "ink";
import { useEffect, useState } from "react";

export function useFullScreen() {
  const { stdout } = useStdout();
  const ttyStdout = stdout as NodeJS.WriteStream;
  const [size, setSize] = useState({
    columns: ttyStdout.columns || 80,
    rows: ttyStdout.rows || 24,
  });

  useEffect(() => {
    const onResize = () => {
      setSize({
        columns: ttyStdout.columns || 80,
        rows: ttyStdout.rows || 24,
      });
    };

    stdout.on("resize", onResize);
    return () => {
      stdout.off("resize", onResize);
    };
  }, [stdout]);

  return size;
}
