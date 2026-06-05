<div align="center">

# 📋 Task Manager

### _Streamline your workflow. Collaborate smarter. Ship faster._

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_App-4F46E5?style=for-the-badge)](https://task-management-5cqq.vercel.app)
[![MIT License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-24.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-Vite-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)


</div>

---

## 🧩 Project Overview

> **Task Manager** is a full-stack task management web application built to streamline daily task organisation and team collaboration. Users can manage personal and team-based tasks, track progress, and share updates — all within an intuitive Kanban-style dashboard.

- 🔐 Secure JWT-based authentication protecting **1,000+ users**
- ⚡ CRUD operations powered by **Redux Toolkit**, boosting task completion efficiency by **25%**
- 🤝 Real-time team collaboration with member assignment and shared boards
- 📊 Built-in analytics with smart date-range filtering

---

## 🖼️ Screenshots

<p align="center"><b>Register Page</b></p>
<p align="center">
  <a href="https://task-management-org.vercel.app/login">
    <img src="./frontend/src/assets/Registerpage.png" alt="Register Page" width="85%"/>
  </a>
</p>

<p align="center"><b>Dashboard</b></p>
<p align="center">
  <a href="https://task-management-org.vercel.app/">
    <img src="./frontend/src/assets/Dashboard.png" alt="Dashboard" width="85%"/>
  </a>
</p>

<p align="center"><b>Public Task View</b></p>
<p align="center">
  <a href="https://task-management-org.vercel.app/task/67421bb3a90e252d2d4cb42e">
    <img src="./frontend/src/assets/PublicView.png" alt="Public View" width="85%"/>
  </a>
</p>

---

## ✨ Features

### 🔑 Authentication & Security
- User registration, login, and secure password hashing via **bcrypt.js**
- JWT-based session management with automatic logout on sensitive changes (email/password update)
- Only authenticated users can create and manage tasks

### 📝 Task Management
- Create tasks with **priority**, **due dates**, **categories**, and optional public sharing
- Full **CRUD** support — create, read, update, and delete tasks with ease
- Kanban-style board with four status lanes: **Backlog → To-Do → In-Progress → Done**
- Visual due-date indicators: 🔴 Overdue · 🟢 Completed

### 👥 Collaboration
- Add members to boards and assign them to tasks during creation
- Read-only public link sharing for external stakeholders

### 📊 Analytics & Filtering
- Dedicated analytics section with task breakdowns
- Filter by **Today**, **This Week** (default), or **This Month**

### 🎨 User Experience
- Truncated task titles with full-text tooltips for clean boards
- Toast notifications for all actions
- Pre-filled settings form for frictionless profile updates
- Mandatory fields marked with red asterisk (\*)

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React.js, Vite, Redux Toolkit, React Router DOM |
| **UI & Notifications** | React Icons, React Toastify |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Auth & Security** | JWT, Bcrypt.js |
| **Config** | Dotenv, CORS |
| **Deployment** | Vercel |
| **Code Quality** | ESLint |

---

## ⚙️ Setup Instructions

### Prerequisites
- **Node.js** `v24.x`
- **npm** or **yarn**
- A running **MongoDB** instance

---

### 🔧 Backend Setup

```bash
# 1. Navigate to the backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Create your .env file
touch .env
```

Add the following to `backend/.env`:

```env
MONGODB_URI=mongodb+srv://...
FRONTEND_URL=http://localhost:5173
PORT=9000
JWT_SECRET=secret-kJKJllKKJJghLjOiUfcHGkMLgdJlLKDtrdyKLBJbRdesEkj
```

```bash
# 4. Start the development server
npm run dev
```

---

### 🎨 Frontend Setup

```bash
# 1. Navigate to the frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Create your .env file
touch .env
```

Add the following to `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:9000
VITE_FRONTEND_URL=http://localhost:5173
```

```bash
# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. 🎉

---

## 📜 Scripts

### Frontend

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run lint` | Lint the codebase |
| `npm run preview` | Preview the production build |

### Backend

| Command | Description |
|---|---|
| `npm run dev` | Start server in development mode (nodemon) |
| `npm run start` | Start server in production mode |

---

## 🚀 Live Demo

Try the live application here → **[task-management-5cqq.vercel.app](https://task-management-5cqq.vercel.app)**

---

## 👨‍💻 Author

<div align="center">

### Mohit Sharma

_Full Stack Developer · Problem Solver · Open Source Enthusiast_

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohit-sharma-27a6532b6)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MsParadox)
[![Codeforces](https://img.shields.io/badge/Codeforces-Profile-1F8ACB?style=for-the-badge&logo=codeforces&logoColor=white)](https://codeforces.com/profile/Msparadox)
[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/ms_paradox78/)

[![Email](https://img.shields.io/badge/Gmail-Mail_Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohitsharma782828372@gmail.com)

</div>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">

⭐ **If you found this project helpful, please give it a star!** ⭐

_Thank you for checking out Task Manager! Feedback, suggestions, and contributions are always welcome._ 😊

</div>
