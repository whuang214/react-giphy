import { useState } from "react";

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
    <form>
      <input type="text" value={searchPhrase} onChange={handleChange} />
      <button onClick={handleSubmit}>Search</button>
    </form>
  );
}
