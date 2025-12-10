# Frontend Mentor - Interactive rating component

![Design preview for the Interactive rating component coding challenge](./preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this interactive rating component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

# Front-end Style Guide

## Layout

The designs were created at the following widths:

-   **Mobile:** 375px\
-   **Desktop:** 1440px

## Colors

### Primary

-   **Orange 500:** hsl(25, 97%, 53%)

### Neutral

-   **White:** hsl(0, 100%, 100%)\
-   **Grey 500:** hsl(217, 12%, 63%)\
-   **Grey 900:** hsl(213, 19%, 18%)\
-   **Grey 950:** hsl(216, 12%, 8%)

## Typography

### Body Copy

-   **Paragraph:** 15px

### Font

-   **Family:** Overpass\
-   **Weights:** 400, 700

------------------------------------------------------------------------

# Table of Contents

-   Overview
-   Screenshot
-   Links
-   My Process
-   Built With
-   What I Learned
-   Continued Development
-   Useful Resources
-   Author
-   Acknowledgments

------------------------------------------------------------------------

# Overview

### The Challenge

Users should be able to: - View responsive layouts\
- See hover states\
- Select and submit a rating\
- View a Thank You state

------------------------------------------------------------------------

## Screenshot

Add your screenshot here:

    [](./design/desktop-design.jpg)
    [](./design/active-states.jpg)
    [](./design/desktop-thank-you-state.jpg)
    [](./design/mobile-design.jpg)
    [](./design/mobile-thank-you-state.jpg)


------------------------------------------------------------------------

## Links

-   **Solution URL:**
#  [Solution](https://github.com/Dev-Laolu/Interactive-rating-component)
-   **Live Site URL:**
#

------------------------------------------------------------------------

# My Process

## Built With

-   Semantic HTML5\
-   CSS custom properties\
-   Flexbox\
-   CSS Grid\
-   Mobile-first workflow\
-   Vanilla JavaScript

------------------------------------------------------------------------

## What I Learned

This project helped me practice JavaScript state changes and UI
transitions.

``` js
submitBtn.addEventListener("click", () => {
  thankYouCard.classList.remove("hidden");
  ratingCard.classList.add("hidden");
  ratingResult.textContent = selectedRating;
});
```

------------------------------------------------------------------------

## Continued Development

Areas to keep improving: - Component reusability\
- Accessibility\
- Layout architecture

------------------------------------------------------------------------

## Useful Resources

-   MDN Web Docs\
-   Frontend Mentor discussions

------------------------------------------------------------------------

# Author

**Hopewell Olayinka (Laolu The Creator)**\
- Portfolio: https://sites.google.com/view/laoluthecreator/\
- GitHub: https://github.com/Dev-Laolu\
- Instagram: https://www.instagram.com/laoluthedesigner/\
- LinkedIn: https://www.linkedin.com/in/olayinkahopewell/\
- TikTok: https://www.tiktok.com/@olayinkahopewell/

------------------------------------------------------------------------

# Acknowledgments

Thanks to Frontend Mentor community for guidance and inspiration.
