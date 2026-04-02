import { useState } from "react";
import axios from "axios";

export default function Search() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/recipes?q=${query}`
    );
    setResults(res.data);
  };

  return (
    <div>
      <input onChange={(e) => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>

      {results.map(r => (
        <div key={r.id}>
          <img src={r.image} width={100} />
          <p>{r.title}</p>
        </div>
      ))}
    </div>
  );
}