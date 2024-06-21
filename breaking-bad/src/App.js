import { useState, useEffect } from "react";
import Header from "./components/Navbar"
import SearchBar from "./components/Searchbar"
import CharacterList from "./components/Characterlist"
import axios from "./components/api";
import Spinner from "./components/Spinner"
function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const results = await axios.get(`/characters?name=${query}`);
      setItems(results.data);
      setLoading(false);
      console.log({ results });
    };
    fetchItems();
  }, [query]);
  return (
    <div className="app">
      <Header />
      <SearchBar setQuery={(query) => setQuery(query)} />
      {loading ? <Spinner /> : <CharacterList items={items} />}
    </div>
  );
}

export default App;
