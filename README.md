# Websidy

Websidy site

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  ├── components/          # Reusable components
  ├── pages/              # Page components
  │   └── HomePage.jsx    # Generic home page
  ├── store/              # Redux store configuration
  │   ├── store.js        # Store setup
  │   └── slices/         # Redux slices
  │       └── themeSlice.js  # Theme management slice
  ├── App.jsx             # Main app component
  └── index.jsx           # Entry point
```

## Features

- React 18
- Redux Toolkit for state management
- Theme management (light/dark mode)
- Vite for fast development and building
