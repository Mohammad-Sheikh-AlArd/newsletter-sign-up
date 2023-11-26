# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

- [Interface](./screenshot.png)
- [validation message](./validationMessage.png)
- [success message](./successMessage.png)

### Links

- [solution](https://github.com/Mohammad-Sheikh-AlArd/newsletter-sign-up.git)
- [live site](https://mohammad-sheikh-alard.github.io/newsletter-sign-up/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS @media responsive

### What I learned

```js
document.querySelector(".Form").style.scale = 0;
setTimeout(() => {
  document.querySelector(".Form").style.display = "none";
  document.querySelector(".success-mesage").style.display = "flex";
  document.querySelector(".success-mesage").style.scale = "100%";
}, "200");
```

This code allowed the zoom-out animation of the subscription form to be executed before the success message appeared, by giving it 0.2 seconds to execute.

## Author

- Website - [Muhammad Sheikh alard](https://muhammad-sheikh-alard.web.app)
- Frontend Mentor - [@Mohammad-Sheikh-AlArd](https://www.frontendmentor.io/profile/Mohammad-Sheikh-AlArd)
