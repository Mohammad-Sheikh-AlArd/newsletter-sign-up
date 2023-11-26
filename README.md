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

```html
<div class="container">
  <div class="Form">
    <h1>subscription form</h1>
    <button onclick="showSuccessMessage()">subscribe</button>
  </div>
  <div class="success-mesage">
    <h1>success mesage</h1>
  </div>
</div>
```

```css
.container {
  width: 100%;
  height: 100vh;
  background: #36384e;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Form {
  width: 45em;
  height: 30em;
  background: #ffffff;
  border-radius: 1.8em;
  box-shadow: 0 0 20px 1px #252525;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1.2em;
  overflow: hidden;
  transition: all 0.3s ease;
}

.success-mesage {
  width: 23.5em;
  height: 26em;
  background: #ffffff;
  border-radius: 1.8em;
  box-shadow: 0 0 20px 1px #252525;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.2em 2.9em;
  display: none;
  overflow: hidden;
  transition: all 0.3s ease;
  scale: 0;
}

h1 {
  font-size: 3em;
  font-weight: 700;
  color: #242742;
}
```

```js
function showSuccessMessage() {
  document.querySelector(".Form").style.scale = 0;
  setTimeout(() => {
    document.querySelector(".Form").style.display = "none";
    document.querySelector(".success-mesage").style.display = "flex";
    document.querySelector(".success-mesage").style.scale = "100%";
  }, "200");
}
```

This code allowed the zoom-out animation of the subscription form to be executed before the success message appeared, by giving it 0.2 seconds to execute.

## Author

- Website - [Muhammad Sheikh alard](https://muhammad-sheikh-alard.web.app)
- Frontend Mentor - [@Mohammad-Sheikh-AlArd](https://www.frontendmentor.io/profile/Mohammad-Sheikh-AlArd)
