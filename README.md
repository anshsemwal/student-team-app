# student-team-app

## Student Team Members Management App

A MERN stack web application for managing student team members.

---

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [How to Run](#how-to-run)
- [Project Structure](#project-structure)
- [Team](#team)
- [License](#license)

---

## Description

This project allows you to add, view, and manage student team members. Each member can have a profile with personal and academic details, hobbies, certificates, internships, and a profile image. The app is built using React.js (frontend), Node.js/Express (backend), and MongoDB (database).

---

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Git installed

### Steps

1. **Clone the repository:**
git clone https://github.com/anshsemwal/student-team-app.git
cd student-team-app

2. **Install dependencies:**

- **Backend:**
  ```
  cd backend
  npm install
  ```

- **Frontend:**
  ```
  cd ../frontend
  npm install
  ```

3. **Set up environment variables:**

- In `backend/`, create a `.env` file for your MongoDB URI and any secrets (do NOT commit this file). Example:
  ```
  MONGO_URI=mongodb://localhost:27017/student-team-app
  PORT=5000
  ```

---

## API Endpoints

| Method | Endpoint                  | Description                          |
|--------|---------------------------|--------------------------------------|
| GET    | `/api/members`            | Get all members                      |
| GET    | `/api/members/:id`        | Get member by ID                     |
| POST   | `/api/members`            | Add a new member (with image upload) |

---

## How to Run

1. **Start MongoDB** (if not already running).

2. **Start Backend:**
cd backend
npm run dev

3. **Start Frontend:**
cd ../frontend
npm start

4. **Open in browser:**  
Go to [http://localhost:3000](http://localhost:3000)

---

## Project Structure

student-team-app/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── uploads/
│ ├── app.js
│ ├── package.json
├── frontend/
│ ├── public/
│ ├── src/
│ ├── package.json
├── .gitignore
├── README.md

---

## Team

Team Name: **Missile**

---

## License

This project is for educational purposes.
