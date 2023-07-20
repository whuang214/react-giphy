import { useState, useEffect } from "react";
import GiphySearchForm from "./GiphySearchForm/GiphySearchForm.jsx";
import Giphy from "./Giphy/Giphy.jsx";

export default function App() {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [gif, setGif] = useState(null); // one gif

  useEffect(() => {
    if (!searchPhrase) return;

    console.log("searching for", searchPhrase);

    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const searchURL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchPhrase}&limit=1`;

    async function fetchGifs() {
      try {
        const response = await fetch(searchURL);
        const json = await response.json();
        setGif(json.data[0]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGifs();
  }, [searchPhrase]);

  function handleSearchPhraseChange(newSearchPhrase) {
    setSearchPhrase(newSearchPhrase);
  }

  return (
    <div className="search-container">
      <h1>Giphy Search</h1>
      <GiphySearchForm onSearchPhraseChange={handleSearchPhraseChange} />
      {gif && <Giphy gif={gif} />}
    </div>
  );
}
