import React, { useState } from "react";
import { getJournalRecommendations } from "../services/api";
import { TextField, Button, Typography, Box } from "@mui/material";

const SearchBar = ({ setRecommendations }) => {
  const [abstract, setAbstract] = useState("");

  const handleSearch = async () => {
    if (!abstract.trim()) {
      alert("Please enter your abstract.");
      return;
    }
    const results = await getJournalRecommendations(abstract);
    setRecommendations(results);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <Typography variant="h5" gutterBottom>
        Paste Your Abstract or Keywords
      </Typography>
      <TextField
        multiline
        rows={4}
        variant="outlined"
        placeholder="Enter your abstract here..."
        value={abstract}
        onChange={(e) => setAbstract(e.target.value)}
        fullWidth
        style={{ maxWidth: "600px", marginBottom: "20px" }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search Journals
      </Button>
    </Box>
  );
};

export default SearchBar;


