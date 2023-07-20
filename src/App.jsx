import { useState } from "react";
import GiphySearchForm from "./GiphySearchForm/GiphySearchForm.jsx";

export default function App() {
  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

  return (
    <>
      <GiphySearchForm />
    </>
  );
}
