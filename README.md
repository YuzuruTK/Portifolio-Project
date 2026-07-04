# Portifolio Project

Personal portfolio website built with **React** and **Vite**, featuring smooth page animations, a light/dark theme toggle, and a clean multi-page layout for showcasing experience, education, skills, certifications, and contact information.

## Features

- **React 19 + Vite** for a fast development and build experience
- **Styled Components** for component-scoped, theme-aware styling
- **Light/Dark theme toggle** with saved preference (persisted in `localStorage`) and automatic detection of system preference
- **Framer Motion** animations for smooth page and element transitions
- **React Router** multi-page navigation (Home, About, Experience, Education, Skills, Certifications, Contact)
- Responsive layout

## Tech Stack

| Category   | Technology |
|------------|------------|
| Framework  | [React](https://react.dev/) 19 |
| Build tool | [Vite](https://vitejs.dev/) |
| Styling    | [styled-components](https://styled-components.com/) |
| Animation  | [Framer Motion](https://www.framer.com/motion/) |
| Routing    | [React Router](https://reactrouter.com/) |
| Linting    | ESLint |

## Project Structure

```
Portifolio-Project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── common/
│   │       ├── Header.jsx
│   │       ├── Layout.jsx
│   │       ├── Navigation.jsx
│   │       └── ThemeToggle.jsx
│   ├── contexts/
│   │   └── ThemeContext.jsx     # Light/dark theme provider
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Skills.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx                  # App routes
│   └── main.jsx                 # Entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/YuzuruTK/Portifolio-Project.git
   cd Portifolio-Project
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (default Vite port).

### Available Scripts

| Command           | Description                              |
|--------------------|------------------------------------------|
| `npm run dev`      | Starts the development server with HMR   |
| `npm run build`    | Builds the app for production            |
| `npm run preview`  | Previews the production build locally    |
| `npm run lint`     | Runs ESLint on the project               |