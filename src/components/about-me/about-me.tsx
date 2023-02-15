import { Box, Center, Heading, Stack, Text } from "@gaze-ui/react";
import * as React from "react";

export const AboutMe = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Box
      as="article"
      padding="var(--size-space-100)"
      background="var(--color-violet-900)"
      borderRadius="var(--size-radius-lg)"
      invert
    >
      <Text>
        Hello 👋🏻 my name is Jay! I'm a frontend software engineer with bountiful
        experience building hundreds of websites for businesses, law firms,
        non-profits, and universities across the nation. I enjoy exploring
        opportunities in technology for creatively sharing information, and have
        worked with a variety of teams to deliver quality web applications for
        clients large and small.
      </Text>
    </Box>
  </Center>
);
