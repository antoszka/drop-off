import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "Pingvin Share",
  tagline:
    "Pingvin Share is self-hosted file sharing platform and an alternative for WeTransfer.",
  favicon: "img/dropoff.svg",

  url: "https://antoszka.github.io",
  baseUrl: "/drop-off/",
  organizationName: "antoszka",
  projectName: "drop-off",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/antoszka/drop-off/edit/main/docs",
        },
        blog: false,
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/dropoff.svg",
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "Pingvin Share",
      logo: {
        alt: "Pingvin Share Logo",
        src: "img/dropoff.svg",
      },
      items: [
        {
          href: "https://github.com/antoszka/drop-off",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
