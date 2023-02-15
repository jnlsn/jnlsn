import * as React from "react";
import { Box, Cluster, Center, Icon, Heading } from "@gaze-ui/react";
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
      <Cluster className={cx("social")} space="var(--size-space-10)">
        <a
          href="https://github.com/jnlsn/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon label="GitHub">
            <IconBrandGithub stroke="1.5" />
          </Icon>
        </a>
        <a
          href="https://linkedin.com/in/nielsen/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon label="LinkedIn">
            <IconBrandLinkedin stroke="1.5" />
          </Icon>
        </a>
        <a
          href="https://instagram.com/jayarnielsen/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon label="Instagram">
            <IconBrandInstagram stroke="1.5" />
          </Icon>
        </a>
      </Cluster>
    </Box>
  </Center>
);
