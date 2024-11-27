import {
  Anchor,
  Box,
  Frame,
  Heading,
  Sidebar,
  Stack,
  Text,
} from "@gaze-ui/react";
import Image, { StaticImageData } from "next/image";
import * as React from "react";

export interface ProjectProps {
  color: string;
  cta: string;
  description: string;
  image: StaticImageData;
  link: string;
  reverse?: boolean;
  title: string;
}

export const Project = ({
  color,
  cta,
  description,
  image,
  link,
  reverse,
  title,
}: ProjectProps) => (
  <Sidebar
    reverse={reverse}
    side="left"
    sideWidth="20rem"
    space="var(--gaze-space-100)"
  >
    <Frame aspectRatio={16 / 9} borderRadius="var(--gaze-radius-lg)">
      <Image alt="title" placeholder="blur" src={image} />
    </Frame>
    <Box
      background={color}
      borderRadius="var(--gaze-radius-lg)"
      data-invert="true"
      padding="var(--gaze-space-100)"
    >
      <Stack space="var(--gaze-space-25)">
        <Heading as="h3" variant="h5">
          {title}
        </Heading>
        <Text>
          {description} [<Anchor href={link}>{cta}</Anchor>]
        </Text>
      </Stack>
    </Box>
  </Sidebar>
);
