
import { useState, useEffect } from "react";
import "./App.css";

const API = "http://localhost:5000/api/movies";




function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    title: "",
    genre: "",
    releaseYear: "",
    rating: "",
    director: ""
  });

  const [editId, setEditId] = useState(null);


  // READ - Fetch movies
  const fetchMovies = async () => {
    const response = await fetch(API);
    const data = await response.json();
    setMovies(data);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Filter movies based on search input
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  // Handle form inputs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // CREATE and UPDATE
  const handleSubmit = async (e) => {
    e.preventDefault();

    const movieData = {
      ...form,
      releaseYear: Number(form.releaseYear),
      rating: Number(form.rating)
    };

    const url = editId ? `${API}/${editId}` : API;
    const method = editId ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movieData)
    });

    if (!response.ok) {
      alert("Could not save movie");
      return;
    }

    setForm({
      title: "",
      genre: "",
      releaseYear: "",
      rating: "",
      director: ""
    });

    setEditId(null);
    fetchMovies();
  };

  // EDIT - Load movie into form
  const handleEdit = (movie) => {
    setForm({
      title: movie.title,
      genre: movie.genre,
      releaseYear: movie.releaseYear,
      rating: movie.rating,
      director: movie.director
    });

    setEditId(movie._id);
  };

  // DELETE - Remove movie
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this movie?")) return;

    const response = await fetch(`${API}/${id}`, {
      method: "DELETE"
    });

    if (!response.ok) {
      alert("Could not delete movie");
      return;
    }

    fetchMovies();
  };

  return (
    <div className="container">
      <h1>Movie Collection Manager</h1>
      <p className="subtitle">Manage your favourite movies</p>

      <form onSubmit={handleSubmit} className="movie-form">
        <h2>{editId ? "Edit Movie" : "Add New Movie"}</h2>

        <input
          name="title"
          placeholder="Movie Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          required
        />

        <input
          name="releaseYear"
          type="number"
          placeholder="Release Year"
          value={form.releaseYear}
          onChange={handleChange}
          required
        />

        <input
          name="rating"
          type="number"
          step="0.1"
          min="0"
          max="10"
          placeholder="Rating (0-10)"
          value={form.rating}
          onChange={handleChange}
          required
        />

        <input
          name="director"
          placeholder="Director"
          value={form.director}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {editId ? "Update Movie" : "Add Movie"}
        </button>

        {editId && (
          <button
            type="button"
            onClick={() => {
              setEditId(null);
              setForm({
                title: "",
                genre: "",
                releaseYear: "",
                rating: "",
                director: ""
              });
            }}
          >
            Cancel
          </button>
        )}
      </form>

      <h2 className="collection-heading">
        My Collection ({movies.length})
      </h2>

      <input
        className="search-input"
        type="text"
        placeholder="Search movies by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <div className="movie-card" key={movie._id}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Year: {movie.releaseYear}</p>
            <p>Rating: {movie.rating}/10</p>
            <p>Director: {movie.director}</p>

            <div className="actions">
              <button onClick={() => handleEdit(movie)}>
                Edit
              </button>

              <button onClick={() => handleDelete(movie._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredMovies.length === 0 && (
        <p className="empty">
          {movies.length === 0
            ? "No movies added yet."
            : "No matching movies found."}
        </p>
      )}
    </div>
  );
}

export default App;
