# BasicOfReactJs

This project is created to learn the basics of React.js.  
It covers React components, props, state, events, conditional rendering, and Tailwind CSS styling.

## Technologies

- React.js
- Vite
- Tailwind CSS
- JavaScript

## Setup Project

### 1. Create React App

```bash
npm create vite@latest BasicOfReactJs

Select:

Framework: React
Variant: JavaScript

Go to project:

cd BasicOfReactJs

Install dependencies:

npm install
Setup Tailwind CSS

Install Tailwind CSS:

npm install tailwindcss @tailwindcss/vite

Update vite.config.js:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

Add Tailwind in src/index.css:

@import "tailwindcss";
Run Project
npm run dev

Open:

http://localhost:5173
React Topics
Components
Props
State
Event Handling
Conditional Rendering
React Icons
Tailwind CSS
Project Structure
src
├── components
├── App.jsx
├── main.jsx
└── index.css
Author

Samith
