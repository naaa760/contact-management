const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// Create a new contact
router.post("/", async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const contact = new Contact({ name, email, phone });
    await contact.save();
    res.status(201).json(contact);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: "Duplicate email entry." });
    } else {
      res.status(500).json({ error: "Database error." });
    }
  }
});

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Database error." });
  }
});

// Update a contact
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const contact = await Contact.findByIdAndUpdate(
      id,
      { name, email, phone },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({ error: "Contact not found." });
    }

    res.status(200).json(contact);
  } catch (error) {
    res.status(500).json({ error: "Database error." });
  }
});

// Delete a contact
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByIdAndDelete(id);

    if (!contact) {
      return res.status(404).json({ error: "Contact not found." });
    }

    res.status(200).json({ message: "Contact deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Database error." });
  }
});

module.exports = router;
