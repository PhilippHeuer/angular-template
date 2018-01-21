# Angular Template

## Description

This repository is a template for angular cli based projects.

## Core Features

- [Import Aliases](docs/core/ImportAlias.md)
- [Core / Shared Module](docs/core/CoreSharedModule.md)
- [Routing](docs/core/Routing.md)

## File Structure

```markdown
template/
 ├──config/                        * our configuration
 |   ├──karma.conf.js              * karma config for our unit tests
 │   └──protractor.conf.js         * protractor config for our end-to-end tests
 │
 ├──docs/                          * documentation of the template, you can delete this!
 │
 ├──src/                           * our source files that will be compiled to javascript
 |   ├──main.browser.ts            * our entry file for our browser environment
 |   ├──polyfills.browser.ts       * our polyfills file (browser compatibility)
 |   ├──index.html                 * Index.html: where we generate our index page
 |   ├──tsconfig.app.json          * extension of the tsconfig for the app
 |   ├──tsconfig.spec.json         * extension of the tsconfig for tests
 │   │
 │   ├──app/                       * WebApp: folder
 │   │   ├──app-module/            * the core app module that bootstraps the application
 │   │   ├──app-routing/           * the routing module that contains the routing configuration
 │   │   ├──app-core/              * the core module to provide singleton services and modules for the app module
 │   │   └──app-shared/            * the shared module with common dumb components 
 │   │
 │   ├──assets/                    * static assets are served here
 │   │
 │   └──environments/              * environment configrations
 │
 ├──tsconfig.json                  * typescript config used outside webpack
 └──package.json                   * what npm uses to manage its dependencies
```
