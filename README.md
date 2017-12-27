# Angular Template

## Description

This repository is a template for angular cli based projects.

## Features

- [Import Aliases](docs/features/ImportAlias.md)

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
 │   │   ├──app.component.spec.ts  * a simple test of components in app.component.ts
 │   │   ├──app.e2e.ts             * a simple end-to-end test for /
 │   │   └──app.component.ts       * a simple version of our App component components
 │   │
 │   ├──assets/                    * static assets are served here
 │   │
 │   │
 │   └──environments/              * environment configrations
 │
 ├──tsconfig.json                  * typescript config used outside webpack
 └──package.json                   * what npm uses to manage its dependencies
```
