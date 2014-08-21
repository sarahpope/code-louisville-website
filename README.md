#Code Louisville 

---

###Ghost readme and instructions

1. `git clone --recursive -b stable git@github.com:erow80/Ghost.git code-louisville`
2. 




Helpful links

- https://help.github.com/articles/fork-a-repo

Installing on your server

- http://studiofrenetic.com/blog/lets-start-a-blog-with-ghost/
- http://blog.tomgillett.me/deploying-ghost-with-capistrano/
- http://seanvbaker.com/a-ghost-workflow/
- http://docs.ghost.org/installation/deploy/#supervisor

Updating & Building Ghost

- http://stefanleonte.com/how-to-install-and-run-ghost-from-git/
- http://matt-harrison.com/keeping-ghost-up-to-date-with-grunt-and-git/
- http://www.allaboutghost.com/script-to-automatically-update-ghost-with-git/

Using as a NPM module

- https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-an-NPM-module

- http://capistranorb.com/




## Basic ghost wrapper
This is a wrapper to use ghost as a module.

- Setup your `config.js` from `config.example.js`
- Copy your content folder to `content/`
- Include your content path in  `config.js`:
```
production: {
  paths: {
      contentPath: path.join(__dirname, '/content/'),
  }
}
```
- `npm install` to install ghost
- Run `grunt init` in `node_modules/ghost` to compile assets


This setup is based on [this wiki](https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-a-NPM-module). Follow it for detail instructions.