import { Center, Stack } from "@gaze-ui/react";
import * as React from "react";
import { Project } from "./project";
import helloWorldPic from "../../assets/hello-world.jpg";
import rubbishRabblePic from "../../assets/rubbish-rabble.jpg";

export const Projects = (): JSX.Element => (
  <Center maxWidth="60rem">
    <Stack space="var(--size-space-100)">
      <Project
        title="The Hello World Program"
        description="Learn computer science, programming, and web development with your educational and entertaining super friends."
        image={helloWorldPic}
        color="var(--color-red-900)"
        cta="Learn Compsci"
        link="https://thehelloworldprogram.com"
      />
      <Project
        title="Rubbish Rabble"
        description="Surreal sustainability stories and green inspiration for all ages. Featuring a colorful cast of wise waste-based characters."
        image={rubbishRabblePic}
        color="var(--color-yellow-900)"
        cta="Go Green"
        link="https://rubbishrabble.com"
        reverse
      />
    </Stack>
  </Center>
);
