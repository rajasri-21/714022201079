import React from "react";
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material";

function StatsPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3, borderRadius: 3, boxShadow: 3 }}>
        <Typography variant="h5" gutterBottom>
          URL Statistics
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="short.ly/abc123 → https://google.com" secondary="Expires in 30 minutes" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
}

export default StatsPage;
