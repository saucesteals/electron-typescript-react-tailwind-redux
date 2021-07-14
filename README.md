# electron-typescript-react-tailwind-redux

> A secure, modular, and easy to use [Electron Forge](https://www.electronforge.io/) boilerplate featuring [Typescript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Webpack](https://webpack.js.org/), [TailwindCSS](https://tailwindcss.com/), [Redux](https://redux.js.org/) and [persistance](https://github.com/saucesteals/electron-persist-secure) (with [redux-persist](https://github.com/rt2zz/redux-persist) support) 


---

### **Installation**

Clone the repository locally with **none** of its git history
```sh
$ git clone --depth 1 --single-branch https://github.com/saucesteals/electron-typescript-react-tailwind-redux.git your-project-name

$ cd your-project-name

$ yarn
```
### **OR**

Generate a GitHub repository with the [Use this template](https://github.com/saucesteals/electron-typescript-react-tailwind-redux/generate) button above

```sh
$ git clone https://github.com/your-username/your-project-name

$ cd your-project-name

$ yarn
```


---

### **Starting Development**

Start the app in the `dev` environment:
```sh
yarn start
```

---

### **Packaging for Production**
To package apps into a local executable:
- Personalize the forge **maker** configs at `/.config/forge.`
```sh
yarn make:win
# yarn make:mac
# yarn make:linux
```

---

### **Releasing with GitHub**
1. Copy the contents of `env.example` to `.env` (Copy into a blank one if you dont already have one)
2. Set your `GH_TOKEN` 
3. Personalize the forge **publisher** configs at `/.config/forge.config.js`
```sh
yarn publish:win
# yarn publish:mac
# yarn publish:linux
```

---

### **Platform-Specifc Icon Generation**

1. Ensure that you have a high quality `source.png` icon in your `/assets/package` folder
2. Run:
```sh
yarn create-icons
```
3. Check your new icons in `/assets/package/icons`

---

### **Folder Structure**

```sh
- /.config
  ... # development config files

- /assets
  - /package # static assets for packaging (ex. installer logo)
    - /icons # icons for all platforms you wish to package for

    - source.png  # the source image for all package icons
                  # used to auto-generate all platform icons

    ...      # extra assets (ex. installer loading gif)

  - /icons  # icons for your backend/frontend

  - /fonts  # fonts for your frontend

  ...       # add on as u go (ex. /wallpapers)

- /src
  - /bridges
    index.ts # main contextBridges

    ... # add on bridges in other files or include them in index.ts
        # make sure to import any new bridge files in the preload
        
  - /app # backend code
    - /ipc # ipcRenderer -> ipcMain listeners
      - main.ts # main functionality ipc listeners
                # ex. quit/hide
              
      ...       # add on as u go
                # make sure to add imports to new ipc files
                # in the main electron entry

  - /render # frontend code
    - /containters # Containers per routes
      - /HomePage # HomePage containters

    - /components # Components

    - /redux # Everything redux

    - Routes.tsx # react-router routes

    - App.tsx # Export entire app with routes components 
              # and redux provider if you are using it

    - 

  main.ts # main "backend" electron entry

  renderer.ts # main "frontend" electron renderer entry

  preload.ts # main "entry to frontend" electron preload entry

```

---

### **Contributing**
When contributing to this repository, please first discuss the change you wish to make via an issue.

1. Fork the Project
2. Create your Feature Branch (**git checkout -b feature/AmazingFeature**)
3. Commit your Changes (**yarn commit**)
4. Push to the Branch (**git push origin feature/AmazingFeature**)
5. Open a Pull Request and leave some comments!


---

### **Maintainers**
* [Noah (wadu)](https://github.com/fourwadu/)
* [Daniel (sauce)](https://github.com/saucesteals/)
