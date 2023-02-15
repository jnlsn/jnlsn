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
  title: string;
  description: string;
  image: StaticImageData;
  reverse?: boolean;
  color: string;
  link: string;
  cta: string;
}

export const Project = ({
  title,
  description,
  image,
  reverse,
  color,
  link,
  cta,
}: ProjectProps): JSX.Element => (
  <Sidebar
    reverse={reverse}
    side="left"
    sideWidth="20rem"
    space="var(--size-space-100)"
  >
    <Frame aspectRatio={16 / 9} borderRadius="var(--size-radius-lg)">
      <Image alt="title" src={image} />
    </Frame>
    <Box
      background={color}
      borderRadius="var(--size-radius-lg)"
      invert
      padding="var(--size-space-100)"
    >
      <Stack space="var(--size-space-25)">
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
