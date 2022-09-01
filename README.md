# Task Result

## Used technologies / Frameworks

I use the following technologies / frameworks in my project:

- TypeScript / React

I chose React because React is easy to get setup with using create-react-app and it felt like the right tool for this particular job. Using something like Java/JavaFX
would be overkill for a project like this. The browser can handle all criteria beautifully and when combined with TypeScript you get to enjoy the structured-ness
of a language like Java in the browser. React with Typescript felt like the natural choice for this project.


## Used 3rd Party Libraries

I use the following 3rd party libraries in my project:

Name | Reason
--- | ---
[tailwindcss](https://tailwindcss.com ) | I prefer tailwindcss for styling because of it's concise, expressive and powerful utility classes.

Library considerations:

Name | Reason
--- | ---
[html2canvas](https://html2canvas.hertzen.com/ ) | I considered using html2canvas to fulfill the criteria of producing PNG, JPG or GIF images of the "pixel art" DOM-Object but I decided to avoid it because it isn't really necessary considering that we are only drawing a grid with some colored tiles. This is not very difficult to redraw using the Canvas API, which is what I decided to do instead.


## Installation / Run

The following components must be installed locally:

- [npm](https://www.npmjs.com/) v8.18.0
- [nodejs](https://nodejs.org/en/) v18.8.0

To run the project locally, enter the following in the command line / bash:

```console
$ git clone https://github.com/xAlencicx/frontend-junior-code-challenge-3.git
$ cd frontend-junior-code-challenge-3
$ npm install
$ npm run start
```
---
