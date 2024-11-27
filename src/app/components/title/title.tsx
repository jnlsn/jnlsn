import { Heading } from "@gaze-ui/react";
import * as React from "react";

import styles from "./title.module.css";

export interface TitleProps {
  children: NonNullable<React.ReactNode>;
}

export const Title = ({ children }: TitleProps) => {
  return (
    <div className={styles.title}>
      <Heading as="h2" className={styles.heading} variant="h4">
        {children}
      </Heading>
    </div>
  );
};
