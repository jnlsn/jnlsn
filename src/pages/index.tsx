import * as React from "react";
import Head from "next/head";
import { Box, Center, Stack } from "@gaze-ui/react";
import { Header } from "../components/header";
import { AboutMe } from "../components/about-me/about-me";
import { Title } from "../components/title";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jay Nielsen - Software Engineer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack space="var(--size-space-100)">
        <Header />
        <AboutMe />
        <Title>Skills</Title>
        <Skills />
        <Title>Projects</Title>
        <Projects />
        <Footer />
      </Stack>
    </>
  );
}
