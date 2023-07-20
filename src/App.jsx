import { useState, useEffect } from "react";
import GiphySearchForm from "./GiphySearchForm/GiphySearchForm.jsx";
import Giphy from "./Giphy/Giphy.jsx";
import { Box, Typography } from "@mui/material";
import { WidthFull } from "@mui/icons-material";

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
    <Box
      className="search-container"
      sx={{
        marginTop: "3vmin",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Giphy Search
      </Typography>
      <GiphySearchForm onSearchPhraseChange={handleSearchPhraseChange} />
      {gif && <Giphy gif={gif} />}
    </Box>
  );
}
