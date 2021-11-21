# Fantasy Pros Expert Filtering Assistant

This repo creates an extension to be used with Firefox that augments Fantasy Pros' expert selection popup.

When the extension is installed, the user will be able to more granularly filter the experts they want contributing
to the rankings of a particular view without having to painstakingly click a large number of checkboxes.

- [Planned Features](#planned-features)
  - [Feature List](#feature-list)
- [Contributing](#contributing)
  - [Tools](#tools)
    - [Node](#node)
    - [TypeScript](#typescript)
    - [Webpack](#webpack)
    - [Preact](#preact)
  - [Web-ext](#web-ext)
  - [Building and Running](#building-and-running)
    - [Building](#building)
    - [Running](#running)

## Planned Features

This extension allows the user to programmatically select a list experts so that they don't have to do it by hand.

For instance, perhaps it's Week 3 of the NFL season. The user may want to see any experts who were among the top 50 most accurate
for the entirety of the prior season, but additionally include the top 10 most accurate experts from the current season. This
can be annoying to do by hand.

### Feature List

- [ ] Extension recognizes whether or not it's on an appropriate page
  - [ ] Determines whether it's on a Fantasy Pros page
  - [ ] Determines whether the page has a "Pick Experts" button
    - [ ] Send request to content script asking for availability of "Pick Experts" button
    - [ ] Displays a loading indicator describing that the extension is determining the availability of the "Pick Experts" button
  - [ ] Informs the user if the extension can't be used on the page
- [ ] Extension dynamically determines available filters
  - [ ] Asks content script for list of filters
  - [ ] Displays loading indicator describing the the extension is determining the list of filters
  - [ ] Caches list of filters to be reused later
  - [ ] Only determines list of available filters if no cache is found
  - [ ] Development tooling allows for the cache to be cleared each time the app is run
  - [ ] Content script confirms any filter requests match the available filters
    - [ ] If the extension presumes to have a list of filters and they turn out to be wrong, the cache is automatically corrected
      - [ ] The user is informed if the cache needed to be updated
      - [ ] Development tools are capable of simulating a bad cache
- [ ] "Last Updated" filter will have hardcoded logic
  - [ ] Content script checks each run to determine if "Last Updated" can't be recognized any longer
  - [ ] User is notified if "Last Updated" is no longer available as an option
  - [ ] Logic supports translations for "Last Updated" text (eg. "Two days ago") to numbers
- [ ] Submit button sends filter request to content script
- [ ] Confirm for user when page has been updated
  - [ ] Loading indicator informs user that filter list is updating

## Contributing

### Tools

#### Node

This project requires your system to have the Node.js runtime available. If you don't have it, head over to the [installer](https://nodejs.org/en/)

#### TypeScript

This project uses TypeScript for all functional code and is configured to require strict typing.

#### Webpack

The two apps that power this project are compiled from TypeScript to single-file minified JavaScript using Webpack.

There is a common Webpack configuration as well as project-specific configurations.

Additionally, the Webpack configurations rely upon a TypeScript configuration file found in the project root.

#### Preact

This project uses Preact to power its views.

### Web-ext

Firefox's `web-ext` library is used to run the extension in development mode. Upon running, Web-ext will open a development-mode instance with the extension prepared in the browser.

### Building and Running

#### Building

Both projects can be built in a single step with `npm run build`.

Additionally, each can be built separately with `npm run build:ui` and `npm run build:script`.

**Note:** Building a single project will not remove the other project's build from the `dist` directory. If you are only developing against the "script" project, for instance, you can save time by only rebuilding that project during the development.

#### Running

Both the content script and the extension UI can be run in development mode with live reloading with `npm run start:script` and `npm run start:ui`, respectively. Additionally, the entire extension can be run in a development environment with `npm run start:extension`.

A common development approach will be to run `npm run start:ui` and / or `npm run start:script` and `npm run start:extension` simultaneously. This will ensure Webpack rebuilds any of the
extension files on save, and subsequently Web-ext to rebuild the extension in the developer instance of Firefox when it detects a build file has changed.
