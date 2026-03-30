import localFont from "next/font/local";

/** Proba Pro — локальні файли в `app/fonts/`. */
export const fontProbaPro = localFont({
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  src: [
    { path: "./fonts/ProbaPro-Thin.woff2", weight: "100", style: "normal" },
    { path: "./fonts/ProbaPro-ThinItalic.woff2", weight: "100", style: "italic" },
    {
      path: "./fonts/ProbaPro-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/ProbaPro-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    { path: "./fonts/ProbaPro-Light.woff2", weight: "300", style: "normal" },
    {
      path: "./fonts/ProbaPro-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    { path: "./fonts/ProbaPro-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ProbaPro-Italic.woff2", weight: "400", style: "italic" },
    { path: "./fonts/ProbaPro-Medium.woff2", weight: "500", style: "normal" },
    {
      path: "./fonts/ProbaPro-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/ProbaPro-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/ProbaPro-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    { path: "./fonts/ProbaPro-Bold.woff2", weight: "700", style: "normal" },
    {
      path: "./fonts/ProbaPro-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-proba-pro",
  display: "swap",
  preload: true,
});
