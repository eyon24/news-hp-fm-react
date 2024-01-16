# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/eyon24/news-hp-fm-react)
- Live Site URL: [Add live site URL here](https://eyon24.github.io/news-hp-fm-react/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

For the structure of building this project, I decided to seperate each component into it's own file. I have a Components folder and a CSS folder so that it would be easier to manage what I was working on / where I would need to make changes. In my opinion, it made it much easier to work in as I was constantly making corrections to my code, and I knew exactly how to find it.

One mistake I made was with the separation of the css. When I media queried for the Destop View, I put a media query in each component's css. I think I would it would have been better to keep that together in the App.css to easily make any changes.

One part of the code that I was excited about was the Modal. Using a modal for a menu is a great design, and creating a simple one is very easy yet effective.

```css
.nav-menu {
  position: fixed;
  background-color: white;
  height: 100%;
  width: 100%;
  left: 110%;
  transition: left 0.3s ease-in-out;
  top: 0;
  z-index: 3;
}

.--opened {
  left: 30%;
  transition: left 0.3s ease-in-out;
}
```

### Continued development

I, like a lot of learners, heavily focused on flexbox while learning css. I started writing code before thinking enough about using grid for better efficiency on the Desktop Version. I was struggling to contain the components onto one page, which isn't neccessary, but is something I would have liked to do for smaller desktop displays. I have not used grid much, and it would have been much easier to style if I had taken time to plan it before hand. In the future, I would like to be just as comfortable using grid, as I am with flexbox.

### Useful resources

- [Example resource 1](https://css-tricks.com/snippets/css/complete-guide-grid/) - This helped me with understanding the properties of CSS Grid. It is a great resource to have handy while styling using grid.

## Author

- github - [Eric Yon](https://www.github.com/eyon24)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/eyon24)
