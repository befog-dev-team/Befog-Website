const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

// POST route for submitting contact form
router.post("/", async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;

        // Validate fields
        if (!name || !phone || !email || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Save to database
        const contact = new Contact({ name, phone, email, message });
        await contact.save();

        res.status(200).json({ message: "Contact form submitted successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
