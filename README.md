# Thinkboard

Thinkboard is a full-stack note-taking application built with React (frontend) and Node.js/Express (backend). It allows users to create, view, and manage notes efficiently, with rate limiting and persistent storage.

---

## Features

- 📝 **Create, view, and manage notes**
- ⚡ **Fast and responsive UI** built with React and Tailwind CSS
- 🔒 **Rate limiting** to prevent abuse (Upstash Redis)
- 🌐 **RESTful API** with Express.js
- 📦 **MongoDB** for persistent storage
- 🔥 **Toast notifications** for user feedback
- 🛡️ **CORS** and environment-based configuration

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, React Router, Lucide Icons, react-hot-toast
- **Backend:** Node.js, Express.js, MongoDB, Upstash Redis (rate limiting)
- **Other:** dotenv, CORS, Axios

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/thinkboard.git
cd thinkboard
```

### 2. Setup Environment Variables

Create a `.env` file in the `backend` directory with the following:

```
PORT=5001
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
NODE_ENV=development
```

### 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 4. Run the Application

#### Start Backend

```bash
cd backend
npm run dev
```

#### Start Frontend

```bash
cd ../frontend
npm run dev
```

The frontend will typically run on [http://localhost:5173](http://localhost:5173) and the backend on [http://localhost:5001](http://localhost:5001).

---

## Folder Structure

## Folder Structure

```
Thinkboard/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── lib/
│   │   └── App.jsx
│   └── package.json

```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License

[MIT](LICENSE)

---

## Acknowledgements

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Upstash Redis](https://upstash.com/)
