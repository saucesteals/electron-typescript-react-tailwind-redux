module.exports = {
  packagerConfig: {},
  makers: [
    {
      name: "@electron-forge/maker-squirrel",
      config: {
        name: "electron_typescript_react_webpack_tailwind_redux",
      },
    },
    {
      name: "@electron-forge/maker-zip",
      platforms: ["darwin"],
    },
    {
      name: "@electron-forge/maker-deb",
      config: {},
    },
    {
      name: "@electron-forge/maker-rpm",
      config: {},
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
