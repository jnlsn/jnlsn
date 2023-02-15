import { Box, Center, Grid, Heading, Icon, Sidebar, Stack } from "@gaze-ui/react";
import {
  IconAccessible,
  IconBook,
  IconBrandGraphql,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconChairDirector,
  IconInfinity,
  IconKeyframes,
  IconMasksTheater,
  IconMovie,
  IconTerminal,
  IconTestPipe,
} from "@tabler/icons-react";
import * as React from "react";
import styles from "./skills.module.css";

export const Skills = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Sidebar side="right" sideWidth="20rem" space="var(--size-space-100)">
      <Box
        padding="var(--size-space-100)"
        background="var(--color-cyan-800)"
        borderRadius="var(--size-radius-lg)"
        invert
      >
        <Stack space="var(--size-space-50)">
          <Heading as="h3" variant="h5">
            Engineering
          </Heading>
          <Grid
            minimum="10rem"
            space="var(--size-space-25)"
            className={styles.skills}
          >
            <Icon>
              <IconBrandTypescript />
              TypeScript
            </Icon>
            <Icon>
              <IconBrandJavascript />
              JavaScript
            </Icon>
            <Icon>
              <IconBrandReact />
              React
            </Icon>
            <Icon>
              <IconBrandNextjs />
              Next.js
            </Icon>
            <Icon>
              <IconBrandGraphql />
              GraphQL
            </Icon>
            <Icon>
              <IconTerminal />
              Linux
            </Icon>
            <Icon>
              <IconAccessible />
              A11y
            </Icon>
            <Icon>
              <IconTestPipe />
              Testing
            </Icon>
            <Icon>
              <IconInfinity />
              CI/CD
            </Icon>
          </Grid>
        </Stack>
      </Box>
      <Box
        padding="var(--size-space-100)"
        background="var(--color-lime-800)"
        borderRadius="var(--size-radius-lg)"
        invert
      >
        <Stack space="var(--size-space-50)">
          <Heading as="h3" variant="h5">
            Multimedia
          </Heading>
          <Grid
            minimum="10rem"
            space="var(--size-space-25)"
            className={styles.skills}
          >
            <Icon>
              <IconBook />
              Technical Writing
            </Icon>
            <Icon>
              <IconChairDirector />
              Video production
            </Icon>
            <Icon>
              <IconKeyframes />
              Animation
            </Icon>
          </Grid>
        </Stack>
      </Box>
    </Sidebar>
  </Center>
);
