const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Home page
app.get("/", (req, res) => {
  res.send("<h1>Welcome to My First Render App!</h1><p>Your app is working.</p>");
});

// Dynamic link
app.get("/a/:code", (req, res) => {
  const code = req.params.code;

  res.send(`
    <h1>Welcome!</h1>
    <p>Your referral code is: <strong>${code}</strong></p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});