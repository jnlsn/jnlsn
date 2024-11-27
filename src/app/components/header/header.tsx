import * as React from "react";
import { Box, Cluster, Center, Icon, Heading, Anchor } from "@gaze-ui/react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconNotebook,
} from "@tabler/icons-react";
import classNames from "classnames/bind";
import styles from "./header.module.css";

const cx = classNames.bind(styles);

export const Header = (): JSX.Element => (
  <header className={cx("header")}>
    <Cluster justify="space-between" align="center">
      <Heading as="h1" variant="h4">
        JAY NIELSEN
      </Heading>
      <Cluster space="var(--gaze-space-20)" align="center">
        <Anchor
          href="https://github.com/jnlsn/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon size="var(--gaze-font-size-3xl)" label="GitHub">
            <IconBrandGithub stroke="1.5" />
          </Icon>
        </Anchor>
        <Anchor
          href="https://linkedin.com/in/nielsen/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon size="var(--gaze-font-size-3xl)" label="LinkedIn">
            <IconBrandLinkedin stroke="1.5" />
          </Icon>
        </Anchor>
        <Anchor
          href="https://mastodon.social/@nlsn"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon size="var(--gaze-font-size-3xl)" label="Mastodon">
            <IconBrandMastodon stroke="1.5" />
          </Icon>
        </Anchor>
        <Anchor
          href="https://nlsn.xyz"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon size="var(--gaze-font-size-3xl)" label="Blog">
            <IconNotebook stroke="1.5" />
          </Icon>
        </Anchor>
      </Cluster>
    </Cluster>
  </header>
);
