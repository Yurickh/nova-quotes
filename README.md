# NovaQuotes

## Javascript structure
The project's code is separated in three main folders:

### pages
> The base views.

This project has one basic page, `App`. It is responsible for wiring up page structure and for mounting the other components.

### components
> The building blocks.

They are used by pages and other components to build the project.

### helpers
> Helper functions.

Differently from components and pages, helpers are not React components. They're just functions to ease pages and components life alike.

## SCSS structure
Inside each component's folder, you'll find the relevant code to style it. The only exception being the `ambience` folder, that holds variables and mixins that are used across components.

## Running the project
To start the local dev server:
```bash
yarn start
```

To run and watch tests:
```bash
yarn test
```

To generate coverage reports:
```bash
yarn test --coverage
```
