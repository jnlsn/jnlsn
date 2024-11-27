import { Box, Center, Text } from "@gaze-ui/react";
import * as React from "react";

export const AboutMe = (): JSX.Element => (
  <Box
    as="article"
    background="var(--gaze-color-violet-900)"
    borderRadius="var(--gaze-radius-lg)"
    data-invert="true"
    padding="var(--gaze-space-100)"
  >
    <Text>
      Self-directed senior software engineer dedicated to crafting intuitive,
      accessible, and user-centered experiences. Creative professional whose
      early career interest in filmmaking brings a unique perspective to
      human-computer interaction and application design. Collaborative mentor
      known for training teams to elevate code quality, improve processes, and
      adopt automation. Accessibility advocate passionate about bridging the gap
      between design and engineering to deliver thoughtful, memorable
      experiences that engage users in new ways.
    </Text>
  </Box>
);
