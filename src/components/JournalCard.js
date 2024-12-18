import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const JournalCard = ({ journal }) => {
  return (
    <Box mb={2}>
      <Card variant="outlined" style={{ maxWidth: "600px", margin: "auto" }}>
        <CardContent>
          <Typography variant="h6">{journal.title}</Typography>
          <Typography variant="body2" color="textSecondary">
            Relevance Score: {journal.similarity.toFixed(2)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default JournalCard;

