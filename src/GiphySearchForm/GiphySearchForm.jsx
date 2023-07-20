import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

export default function GiphySearchForm({ onSearchPhraseChange }) {
  const [searchPhrase, setSearchPhrase] = useState("");

  function handleChange(event) {
    setSearchPhrase(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSearchPhraseChange(searchPhrase);
    // console.log("submitting", searchPhrase);
    setSearchPhrase("");
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 1 }}
    >
      <TextField
        type="text"
        value={searchPhrase}
        onChange={handleChange}
        variant="outlined"
        label="Search"
        size="small"
        sx={{ width: { xs: "100%", m: 320 } }}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
}
