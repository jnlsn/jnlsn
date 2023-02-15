import { Center, Stack } from "@gaze-ui/react";
import * as React from "react";
import helloWorldPic from "../../assets/hello-world.jpg";
import rubbishRabblePic from "../../assets/rubbish-rabble.jpg";
import { Project } from "./project";

export const Projects = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Stack space="var(--size-space-100)">
      <Project
        color="var(--color-red-900)"
        cta="Learn Compsci"
        description="Learn computer science, programming, and web development with your educational and entertaining super friends."
        image={helloWorldPic}
        link="https://thehelloworldprogram.com"
        title="The Hello World Program"
      />
      <Project
        color="var(--color-yellow-900)"
        cta="Go Green"
        description="Surreal sustainability stories and green inspiration for all ages. Featuring a colorful cast of wise waste-based characters."
        image={rubbishRabblePic}
        link="https://rubbishrabble.com"
        reverse
        title="Rubbish Rabble"
      />
    </Stack>
  </Center>
);
