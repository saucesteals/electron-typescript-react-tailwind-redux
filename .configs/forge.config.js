const path = require("path");

const appIconsPath = path.join(__dirname, "..", "assets", "appicons", "icons");

module.exports = {
  packagerConfig: {
    icon: path.join(appIconsPath, "win", "icon.ico"),
    asar: true,
  },
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        // https://js.electronforge.io/maker/squirrel/interfaces/makersquirrelconfig
        setupExe: "Windows Setup.exe",
        setupIcon: path.join(appIconsPath, "win", "icon.ico"),
      },
    },
    {
      name: "@electron-forge/maker-dmg",
      config: {
        // https://js.electronforge.io/maker/dmg/interfaces/makerdmgconfig
        icon: path.join(appIconsPath, "mac", "icon.icns"),
      },
    },
    {
      name: "@electron-forge/maker-deb",
      config: {
        // https://js.electronforge.io/maker/deb/interfaces/makerdebconfig
        icon: path.join(appIconsPath, "png", "1024x1024.png"),
      },
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {
        // https://js.electronforge.io/maker/rpm/interfaces/makerrpmconfig
        icon: path.join(appIconsPath, "png", "1024x1024.png"),
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
