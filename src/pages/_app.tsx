/// <reference types="styled-jsx/global" />
import * as React from "react";
import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import "@gaze-ui/tokens/css/variables.css";
import "@gaze-ui/react/styles/base.css";

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
});

/**
 *
 * @param root0
 * @param root0.Component
 * @param root0.pageProps
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style global jsx>{`
        :root {
          --text-color: var(--color-slate-800);
          --body-font: Courier New, Courier, Lucida Sans Typewriter,
            Lucida Typewriter, monospace;
          --body-weight: 600;
          --heading-font: ${montserrat.style.fontFamily};
          --heading-weight: ${montserrat.style.fontWeight};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
