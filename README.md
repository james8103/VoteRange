# VoteRange: a Strategic Voting Simulation System

**Author:** James Lavin

**Institution:** Maynooth University

**Degree:** BSc Computer Science & Applied Mathematics

**Academic Year:** 2025-2026

---

## Overview

VoteRange is a full-stack web application implementing a real-time, credit-based strategic voting system. Participants join simulated elections in which each holds a personalised, hidden payout table assigning different credit values to each candidate winning. Participants spend credits to cast votes, and the election resolves when any candidate reaches a configurable vote threshold.

| Component   | URL                                    |
| ----------- | -------------------------------------- |
| Frontend    | https://james8103.github.io/VoteRange/ |
| Backend API | https://vote-backend-jofd.onrender.com |

> **Note:** The backend runs on Render's free tier and spins down after 15 minutes of inactivity. The first request after inactivity may take 30–60 seconds.

---

## Prerequisites

- **Node.js** v20.19.0 or later [https://nodejs.org](https://nodejs.org)
- **npm** v8.0.0 or later (included with Node.js)
- **Git:** [https://git-scm.com](https://git-scm.com)
- A **MongoDB Atlas** account with an active cluster: [https://cloud.mongodb.com](https://cloud.mongodb.com)

---

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/james8103/vote.git
cd vote
```

### 2. Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```bash
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
```

### 3. Frontend

```bash
cd ../frontend
npm install
```

---

## Running the Application

Both the backend and frontend must be running simultaneously.

**Terminal 1: Backend:**

```bash
cd backend
npm start
```

A successful startup will output:

```
MongoDB connected
Server running on http://localhost:3001
```

**Terminal 2: Frontend:**

```bash
cd frontend
npm run dev
```

Navigate to `http://localhost:5173/VoteRange` in your browser.

---

## Seeding the Database

The `backend/seed.js` script populates the database with predefined election configurations:

```bash
cd backend
node seed.js
```

Warning: This will overwrite any existing election data in the configured database.

---

## Deployment

The frontend is deployed to **GitHub Pages** and the backend to **Render**. To redeploy the frontend:

```bash
cd frontend
npm run deploy
```

Backend deployments are triggered automatically when changes are pushed to the `main` branch. The `MONGODB_URI` environment variable must be configured in the Render dashboard.

---

## Known Limitations

- **Render cold start:** The backend may take up to 60 seconds to respond after inactivity. A loading indicator on the frontend communicates this to users.
- **No automated tests:** Verification was conducted through manual observation and database inspection.
- **Manual election control:** Hiding/showing elections requires editing the `isVisible` field directly in MongoDB.

---

## License

Submitted as part of a final-year undergraduate thesis at Maynooth University. Not licensed for redistribution or commercial use.
