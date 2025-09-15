import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

import packageJson from "../../package.json";

export default defineUserConfig({
  base: process.env.BASE ? `/${process.env.BASE}/` : "/",
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Secial Rules",
        link: "/special-rules",
      },
      {
        text: "Army Lists",
        children: [
          "astartes.md",
          "loyalists.md",
          "traitors.md",
          "solar-auxilia.md",
          "legio-titanicus.md",
          "knights.md",
          "mechanicum.md",
          "custodes.md",
          "daemons.md",
          "imperial-militia.md",
        ],
      },
      {
        text: "Versions",
        children: [
          {
            text: "Changelog",
            link: "CHANGELOG.md",
          },
          {
            text: "v1.0.0 (EpicAU)",
            link: "/v1.0.0/index.html",
          },
          {
            text: "Latest Development",
            link: "/",
          },
        ],
      },
    ],
  }),
  lang: "en-US",
  title: `Epic 30.000 (v${packageJson.version})`,
  description: "Epic Armageddon army lists for battles in the 30k universe",
});
