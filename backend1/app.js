const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contacts");

const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
// app.use(cors());

// Routes

app.get("/", (req, res) => {
  res.send("Api is running ");
});
// Error handling middleware

// app.use((t) => {
//   console.error(err.stack);
//   res.status(500).json({ error: "Internal Server Error." });
// });

// Start server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
