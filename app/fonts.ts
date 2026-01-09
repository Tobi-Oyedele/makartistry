import localFont from "next/font/local";

export const chillax = localFont({
  src: [
    {
      path: "../public/fonts/chillax/Chillax-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/chillax/Chillax-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/chillax/Chillax-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-chillax",
  display: "swap",
});

export const synonym = localFont({
  src: [
    {
      path: "../public/fonts/synonym/Synonym-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/synonym/Synonym-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-synonym",
  display: "swap",
});
