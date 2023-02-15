import * as React from "react";
import Head from "next/head";
import { Stack } from "@gaze-ui/react";
import { NextPage } from "next";
import { Skills } from "@/components/skills";
import { Footer } from "@/components/footer";
import { Projects } from "@/components/projects";
import { Header } from "../components/header";
import { AboutMe } from "../components/about-me/about-me";
import { Title } from "../components/title";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jay Nielsen - Software Engineer</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
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
};

export default Home;
