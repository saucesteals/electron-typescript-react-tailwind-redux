# electron-typescript-react-webpack-tailwind-redux

>An Electron boilerplate featuring Typescript, React, Webpack, TailwindCSS and Redux ([Electron Persist Secure](https://github.com/saucesteals/electron-persist-secure) x [Redux Persist](https://github.com/rt2zz/redux-persist)) - ready to use for all frontend applications.

Configuring an Electron desktop application can be tricky.

This module creates a secure, modular, and easy to use configuration for best practice React and Electron technologies that you may want in your application!

---

### **Installation**


```sh
$ git clone --depth 1 --single-branch https://github.com/saucesteals/electron-typescript-react-tailwind-redux.git your-project-name

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
```sh
yarn make:win
# yarn make:mac
# yarn make:linux
```

---

### **Releasing with GitHub**
1. Copy the contents of `env.example` to `.env` (Copy into a blank one if you dont already have one)
2. Set your `GH_TOKEN` 
```sh
yarn publish:win
# yarn publish:mac
# yarn publish:linux
```

---

### **Customizing your application**

Customizing features from this boilerplate is extremely easy. You can remove features such as React Router and Redux simply by deleting files associated with them.

---

### **Contributing**
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository.
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project
2. Create your Feature Branch (**git checkout -b feature/AmazingFeature**)
3. Commit your Changes (**yarn commit**)
4. Push to the Branch (**git push origin feature/AmazingFeature**)
5. Open a Pull Request and leave some comments!


---

### **Maintainers**
* [Noah (wadu)](https://github.com/fourwadu/)
* [Daniel (sauce)](https://github.com/saucesteals/)
