import * as React from "react";
import { Center, Stack } from "@gaze-ui/react";
import { Metadata } from "next";
import { Skills } from "./components/skills";
import { Footer } from "./components/footer";
import { Projects } from "./components/projects";
import { Header } from "./components/header";
import { AboutMe } from "./components/about-me/about-me";
import { Title } from "./components/title";

export const metadata: Metadata = {
  title: "Jay Nielsen - Software Engineer",
};

export default function Page() {
  return (
    <Center maxWidth="60rem" gutter={"var(--gaze-space-50)"}>
      <Stack space="var(--gaze-space-100)">
        <Header />
        <AboutMe />
        <Title>Skills</Title>
        <Skills />
        <Title>Projects</Title>
        <Projects />
        <Footer />
      </Stack>
    </Center>
  );
}
