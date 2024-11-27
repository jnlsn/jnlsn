import { Anchor, Cluster, Heading, Icon } from "@gaze-ui/react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMastodon,
  IconNotebook,
} from "@tabler/icons-react";
import classNames from "classnames/bind";
import * as React from "react";

import styles from "./header.module.css";

const cx = classNames.bind(styles);

export const Header = () => (
  <header className={cx("header")}>
    <Cluster align="center" justify="space-between">
      <Heading as="h1" variant="h4">
        JAY NIELSEN
      </Heading>
      <Cluster align="center" space="var(--gaze-space-20)">
        <Anchor
          href="https://github.com/jnlsn/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon label="GitHub" size="var(--gaze-font-size-3xl)">
            <IconBrandGithub stroke="1.5" />
          </Icon>
        </Anchor>
        <Anchor
          href="https://linkedin.com/in/nielsen/"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon label="LinkedIn" size="var(--gaze-font-size-3xl)">
            <IconBrandLinkedin stroke="1.5" />
          </Icon>
        </Anchor>
        <Anchor
          href="https://mastodon.social/@nlsn"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon label="Mastodon" size="var(--gaze-font-size-3xl)">
            <IconBrandMastodon stroke="1.5" />
          </Icon>
        </Anchor>
        <Anchor
          href="https://nlsn.xyz"
          rel="nofollow noreferrer"
          target="_blank"
        >
          <Icon label="Blog" size="var(--gaze-font-size-3xl)">
            <IconNotebook stroke="1.5" />
          </Icon>
        </Anchor>
      </Cluster>
    </Cluster>
  </header>
);
