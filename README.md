# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Screenshot](./images/screenshot-desktop.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Media queries for responsive design
- Vanilla JavaScript for interactivity

### What I learned

This project helped me improve my understanding of:

- **JavaScript event listeners**: I implemented a toggle functionality for hiding and showing content using `classList.toggle`.
- **CSS pseudo-classes for hover states**: I used the `:hover` pseudo-class to add a visual cue when users interact with the FAQ questions.
- **Responsive design**: I used media queries to ensure the layout adapts seamlessly to different screen sizes.

Here is an example of the JavaScript code I implemented for the toggle functionality:

```javascript
const desplegable = document.querySelectorAll('.desplegable');
desplegable.forEach(elemento => {
    const titulo = elemento.querySelector(".titulo");
    const oculto = elemento.querySelector(".oculto");
    const icono = titulo.querySelector("img");
    let mostrandoMas = true;
    titulo.addEventListener("click", () => {
        oculto.classList.toggle("oculto");
        icono.src = mostrandoMas ? "images/icon-minus.svg" : "images/icon-plus.svg";
        mostrandoMas = !mostrandoMas;
    });
});
```
### Continued development
In future projects, I want to focus on:

- Improving accessibility by adding keyboard navigation support.
- Exploring animations for smoother transitions when toggling visibility.
- Deepening my understanding of CSS Grid for more complex layouts.
### Useful resources
- MDN Web Docs - JavaScript - This resource was invaluable in understanding and implementing the addEventListener function.
- CSS Tricks - Flexbox Guide - Helped me align elements properly within the accordion layout.
## Author
- Frontend Mentor - @RoxxVS
- GitHub - @RoxxVS
