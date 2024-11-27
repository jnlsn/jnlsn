import { Anchor, Box, Cluster, Text } from "@gaze-ui/react";
import * as React from "react";

import styles from "./footer.module.css";

export const Footer = () => (
  <Box as="footer" className={styles.footer}>
    <Cluster align="center" justify="space-between">
      <Text fontSize="var(--size-font-sm)">
        Built with{" "}
        <Anchor
          href="https://github.com/studio-drishti/gaze"
          rel="nofollow"
          target="_blank"
        >
          Gaze design system
        </Anchor>
        .
      </Text>
      <Text fontSize="var(--size-font-sm)">
        &copy; {new Date().getFullYear()}
      </Text>
    </Cluster>
  </Box>
);
