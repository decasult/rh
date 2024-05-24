import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--font-raleway)"],
      },
      colors: {
        decasult: {
          primary: "#8e2a2a",
          primaryactive: "#a82121",
          secondary: "#53575a",
          graydark: "#4C5256",
          graylight: "#8A8C8F",
          graylightshadow: "#F5F5F5",
          btnborder: "#8C8C8C",
          btndtext: "#5E5E5E",
          alertred: "#F9294C",
        },
        btn: {
          green: "#E5FFE7",
          greentxt: "#2A8B5C",
          greendisabled: "#F8FFFA",
          greenborder: "#8ED1A4",
          warning: "#FFFAD0",
          warningtxt: "#847E4F",
          warningdisabled: "#FFFFEB",
          warningborder: "#E6E2B2",
          blue: "#C4E1FB",
          bluetxt: "#357DBF",
          bluedisabled: "#E5F6FF",
          blueborder: "#78A9D8",
          red: "#FBC4C4",
          redtxt: "#BF3535",
          reddisabled: "#FFE3E3",
          redborder: "#E17373",
          default: "#A4A6A9",
          defaultborder: "#7B7F87",
          defaultdisabled: "#C0C2C4",
          disabledborder: "#B6B8BA",
        },
      },
      backgroundImage: {
        signupcover: "url('/images/indexcover.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
