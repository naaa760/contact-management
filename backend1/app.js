const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contacts");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/contacts", contactRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error." });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
