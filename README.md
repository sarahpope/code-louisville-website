#Code Louisville 

## About this project

This site is built on the [Ghost](https://ghost.org/) blogging platform which runs on Node.js. Installing Ghost is easy, but updating it proved to be difficult. 

This repo is essentially a wrapper for Ghost. As of v0.4.2 Ghost has been able to run as a npm module. By doing this, we keep the `/core` files untouched while versioning our `/content` directory.

---

#### Dependencies

To run this website, you will need to have the following installed on your system:

1. Node.js [download here](http://nodejs.org/download/)

---

#### Quickstart

1. `npm install -g grunt-cli`
1. `npm install`
1. `npm install` to install ghost
1. To start the custom server and run Ghost, Run `node index.js`
1. Browse to `http://127.0.0.1:2368/`

---

#### Contributing

To contribute to the design of this project, follow the **Quickstart** instructions as well as the steps below:

1. **Fork** the original repo `https://github.com/erow80/code-louisville-website`
1. You should now be able to run `grunt` and see the app working

Note: The `/content/themes/code-louisville/assets/scss/vendor` folder is versioned in the repo, but this may change in the future. 

---

**NOTE: This project is a work in progress.**
