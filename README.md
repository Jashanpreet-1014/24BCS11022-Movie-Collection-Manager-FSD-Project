# Movie Collection Manager

A web-based application developed using the MERN Stack to manage a personal movie collection. Users can add, view, update, delete and search movie records through a simple interface.

## Project Objective

The objective of this project is to develop a simple movie management system that allows users to maintain and organize their movie collection efficiently.

## Features

- **Add Movies:** Add new movies with their details.
- **View Movies:** Display all movies in the collection.
- **Update Movies:** Edit existing movie information.
- **Delete Movies:** Remove movies from the collection.
- **Search Movies:** Search for movies by title.

## Technologies Used

| Technology | Purpose |
|---|---|
| MongoDB | Database |
| Express.js | Backend framework |
| React.js | Frontend library |
| Node.js | Backend runtime |

## Movie Information

Each movie contains the following details:

- Movie Title
- Genre
- Release Year
- Rating
- Director

## Project Structure

```text
Movie-Collection-Manager/
│
├── backend/
│   ├── models/
│   │   └── Movie.js
│   ├── routes/
│   │   └── movieRoutes.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   └── package.json
│
├── .gitignore
└── README.md
```

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Jashanpreet-1014/24BCS11022-Movie-Collection-Manager.git
```

```bash
cd 24BCS11022-Movie-Collection-Manager
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGO_URI=mongodb://127.0.0.1:27017/movieCollection
```

Start the backend server:

```bash
node server.js
```

Backend runs at: `http://localhost:5000`

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| POST | `/api/movies` | Add a new movie |
| GET | `/api/movies` | Get all movies |
| PUT | `/api/movies/:id` | Update movie details |
| DELETE | `/api/movies/:id` | Delete a movie |

## Database

MongoDB is used to store movie information. Mongoose is used to define the movie schema and interact with the database.

## Future Improvements

- Add movie posters.
- Add user authentication.
- Filter movies by genre.
- Add sorting options.

## Author

**Name:** Jashanpreet Singh

**UID:** 24BCS11022

**Project:** Movie Collection Manager

**Technology:** MERN Stack