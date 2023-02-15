import * as React from "react";
import { Box, Cluster, Center, Icon, Text, Heading } from "@gaze-ui/react";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classNames from "classnames/bind";
import styles from "./header.module.css";

const cx = classNames.bind(styles);

export const Header = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Box as="header" className={cx("header")}>
      <Heading as="h1" variant="h5">
        JAY NIELSEN
      </Heading>
      <Cluster space="var(--size-space-10)" className={cx("social")}>
        <a href="https://github.com/jnlsn/" target="_blank" rel="nofollow">
          <Icon label="GitHub">
            <IconBrandGithub stroke="1.5" />
          </Icon>
        </a>
        <a
          href="https://linkedin.com/in/nielsen/"
          target="_blank"
          rel="nofollow"
        >
          <Icon label="LinkedIn">
            <IconBrandLinkedin stroke="1.5" />
          </Icon>
        </a>
        <a
          href="https://instagram.com/jayarnielsen/"
          target="_blank"
          rel="nofollow"
        >
          <Icon label="Instagram">
            <IconBrandInstagram stroke="1.5" />
          </Icon>
        </a>
      </Cluster>
    </Box>
  </Center>
);
