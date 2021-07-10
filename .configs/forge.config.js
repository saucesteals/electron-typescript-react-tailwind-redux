const path = require("path");
require("dotenv").config();

const packageAssetsPath = path.join(__dirname, "..", "assets", "package");

module.exports = {
  packagerConfig: {
    icon: path.join(packageAssetsPath, "icons", "win", "icon.ico"),
    asar: true,
  },
  publishers: [
    {
      name: "@electron-forge/publisher-github",
      config: {
        repository: {
          owner: "saucesteals",
          name: "electron-typescript-react-tailwind-redux",
          authToken: process.env.GITHUB_TOKEN,
        },
        draft: true,
      },
    },
  ],
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        // https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
        setupExe: "Windows Setup.exe",
        iconUrl:
          "https://raw.githubusercontent.com/saucesteals/electron-typescript-react-tailwind-redux/main/assets/package/icons/win/icon.ico",
        setupIcon: path.join(packageAssetsPath, "icons", "win", "icon.ico"),
        authors: "saucesteals & fourwadu",
        loadingGif: path.join(packageAssetsPath, "loading.gif"),
      },
    },
    // You can only build the DMG target on macOS machines.
    // {
    //   name: "@electron-forge/maker-dmg",
    //   config: {
    //     // https://js.electronforge.io/maker/dmg/interfaces/makerdmgconfig
    //     icon: path.join(packageAssetsPath, "icons", "mac", "icon.icns"),
    //   },
    // },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        // https://js.electronforge.io/maker/deb/interfaces/makerdebconfig
        icon: path.join(packageAssetsPath, "icons", "png", "1024x1024.png"),
      },
    },
  ],
  plugins: [
    [
      "@electron-forge/plugin-webpack",
      {
        mainConfig: "./.configs/webpack.main.config.js",
        renderer: {
          config: "./.configs/webpack.renderer.config.js",
          entryPoints: [
            {
              html: "./src/render/index.html",
              js: "./src/render/renderer.ts",
              name: "main_window",
              preload: {
                js: "./src/preload.ts",
              },
            },
          ],
        },
      },
    ],
  ],
};
