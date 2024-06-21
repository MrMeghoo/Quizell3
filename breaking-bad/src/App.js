import React from 'react';
import Header from './components/Navbar';
import SearchBar from './components/Searchbar';
import CharacterList from './components/Characterlist';
import axios from './components/api';
import Spinner from './components/Spinner';
import Donations from "./components/Donations"

function App() {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
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
      <Donations />
    </div>
  );
}

export default App;

