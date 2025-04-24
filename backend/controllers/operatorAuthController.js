const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Operator Signup
const operatorSignup = async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const [existing] = await global.db.query("SELECT * FROM operators WHERE phone = ?", [phone]);
    if (existing.length > 0) {
      return res.status(400).json({ message: "Phone number already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await global.db.query(
      "INSERT INTO operators (name, email, phone, password) VALUES (?, ?, ?, ?)",
      [name, email, phone, hashedPassword]
    );

    res.status(201).json({ message: "Operator registered successfully" });
  } catch (err) {
    console.error("Error during operator signup:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Operator Login
const operatorLogin = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const [rows] = await global.db.query("SELECT * FROM operators WHERE phone = ?", [phone]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Operator not found" });
    }

    const operator = rows[0];
    const isMatch = await bcrypt.compare(password, operator.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ operatorId: operator.id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    res.json({ token, message: "Operator login successful" });
  } catch (err) {
    console.error("Error during operator login:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { operatorSignup, operatorLogin };
