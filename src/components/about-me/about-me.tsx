import { Box, Center, Text } from "@gaze-ui/react";
import * as React from "react";

export const AboutMe = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Box
      as="article"
      background="var(--color-violet-900)"
      borderRadius="var(--size-radius-lg)"
      invert
      padding="var(--size-space-100)"
    >
      <Text>
        Hello 👋🏻 my name is Jay! I'm a frontend software engineer with bountiful
        experience building web applications. After more than 15 years in
        software development, I still love building sustainable systems that are
        purpose-driven, simple to maintain, and easy to understand. I excel at
        engineering web applications, automating manual processes, and
        implementing straightforward procedures within development teams.
      </Text>
    </Box>
  </Center>
);
