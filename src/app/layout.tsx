import * as React from "react";
import { Montserrat } from "next/font/google";
import "@gaze-ui/tokens/css/variables.css";
import "@gaze-ui/react/styles.css";

const montserrat = Montserrat({
  weight: "300",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={
          {
            "--gaze-color-text-default": "var(--gaze-color-slate-800)",
            "--gaze-font-family-base":
              "Courier New, Courier, Lucida Sans Typewriter, Lucida Typewriter, monospace",
            "--gaze-text-weight": "600",
            "--gaze-font-family-heading": montserrat.style.fontFamily,
            "--gaze-heading-weight": montserrat.style.fontWeight?.toString(),
          } as React.CSSProperties
        }
      >
        {children}
      </body>
    </html>
  );
}
