# React Ecommerce Website (Myntra Clone)

## Description

Myntra is a e-commerce website where you can buy clothes, shoes etc. This project is a clone of Myntra website. This project is built using React, Redux, React-Router, Hooks, API, CSS, HTML.

## Demo


## Tech Stack

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Hooks](https://legacy.reactjs.org/docs/hooks-intro.html)
- [React Router](https://reactrouter.com/en/main)
- [API](https://my-json-server.typicode.com/)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)

## Features

- [x] Header
- [x] Sort 
- [x] Bag
- [x] Product Details 
- [x] Footer
- [x] Responsive 

## Project Structure

```
- .eslintrc.cjs
- .gitignore
- index.html
- package-lock.json
- package.json
- public
  - images
    - myntra_logo.webp
- README.md
- src
  - assets
    - react.svg
  - Components
    - BagItem.jsx
    - BagSummary.jsx
    - FetchItems.jsx
    - Footer.jsx
    - Header.jsx
    - HomeItem.jsx
    - LoadingSpinner.jsx
    - Sort.jsx
  - index.css
  - main.jsx
  - routes
    - App.css
    - App.jsx
    - Bag.jsx
    - CreateProduct.jsx
    - Details.jsx
    - Home.jsx
  - store
    - bagSlice.js
    - detailSlice.js
    - fetchStatusSlice.js
    - index.js
    - itemsSlice.js
- vite.config.js
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
