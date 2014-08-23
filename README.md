#Code Louisville 

## Installation
This is a wrapper to use Ghost as a npm module. By doing this, we keep the `/core` files untouched while versioning our `/content` directory.

To install, simply run:

#### Dependencies

Make sure you have the following running on your system:

1. Node.js. Download [here](http://nodejs.org/download/)
1. The following Ruby gems globally installed: `gem install bourbon neat bitters`

#### Quickstart

1. `npm install -g grunt-cli`
1. `npm install`
1. `npm install` to install ghost
1. To start the custom server and run Ghost, Run `node index.js`
1. Browse to `http://127.0.0.1:2368/`

---

#### Contributing

To contribute to the design of this project, you'll need to do the following:

1. **Fork** the original repo `https://github.com/erow80/code-louisville-website`
1. Navigate to `/content/themes/code-louisville/assets/scss/vendor`
1. In your console run `bourbon install && neat install && bitters install`. This will install the framework assets locally
1. You should now be able to run `grunt` and see the app working

---

**NOTE: This project is a work in progress.**
