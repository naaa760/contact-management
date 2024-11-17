const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const [result] = await db.query(
      "INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)",
      [name, email, phone]
    );
    res.status(201).json({ id: result.insertId, name, email, phone });
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      res.status(400).json({ error: "Duplicate entry." });
    } else {
      res.status(500).json({ error: "Database error." });
    }
  }
});

router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM contacts");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: "Database error." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const [result] = await db.query(
      "UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?",
      [name, email, phone, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Contact not found." });
    }

    res.status(200).json({ id, name, email, phone });
  } catch (error) {
    res.status(500).json({ error: "Database error." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM contacts WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Contact not found." });
    }

    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Database error." });
  }
});

module.exports = router;
