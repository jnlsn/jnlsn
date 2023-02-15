import * as React from "react";
import { Center, Heading } from "@gaze-ui/react";
import styles from "./title.module.css";

export interface TitleProps {
  children: NonNullable<React.ReactNode>;
}

export const Title = ({ children }: TitleProps): JSX.Element => {
  return (
    <Center maxWidth="60rem">
      <div className={styles.title}>
        <Heading as="h2" variant="h3" className={styles.heading}>
          {children}
        </Heading>
      </div>
    </Center>
  );
};
