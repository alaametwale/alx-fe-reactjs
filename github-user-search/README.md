# GitHub User Search Application

This project is part of the **ALX Front-End Web Development – Working with APIs** project.

The application is built with **React** and integrates with the **GitHub API** to allow users to search for GitHub profiles using both basic and advanced search features.

---

## 🚀 Project Overview

The GitHub User Search Application allows users to:

* Search for a GitHub user by username
* View basic profile information such as avatar, name, and profile link
* Perform advanced searches using filters like location and minimum repositories
* Experience a responsive UI styled with Tailwind CSS
* Interact with live data from the GitHub API

---

## 🗂️ Project Structure

```
github-user-search/
│
├── src/
│   ├── components/
│   │   └── Search.jsx
│   ├── services/
│   │   └── githubService.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## ⚙️ Installed Packages

The following packages are used in this project:

* **React** – Front-end library
* **Vite** – Development environment
* **Axios** – For HTTP requests to GitHub API
* **Tailwind CSS** – For styling the UI
* **PostCSS & Autoprefixer** – Tailwind dependencies

Install dependencies using:

```
npm install
```

---

## 🧪 Running the Application

To start the development server:

```
npm run dev
```

---

## 🔌 GitHub API Integration

The application uses two GitHub API endpoints:

* Basic user search:
  `https://api.github.com/users/{username}`

* Advanced user search:
  `https://api.github.com/search/users?q={query}`

All API calls are handled inside:

```
src/services/githubService.js
```

---

## 🌍 Deployment

The project is ready to be deployed on **Vercel**.

Environment variables (if used) should be added in Vercel settings and excluded from Git using `.gitignore`.

---

## ✅ Requirements Covered

* Basic React application structure
* Axios integration for API requests
* Search functionality with loading and error states
* Tailwind CSS responsive design
* Proper project structure and files organization

---

## 👤 Author

Alaa Meto
ALX Front-End Web Development Student
