const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ✅ hardcoded credentials (for now)
const EDITOR_EMAIL = "editor@raman.com";

// ✅ hashed ONCE and stored
const HASHED_PASSWORD =
  "$2b$10$V2cj64RkAD81GqlnNzxyle91xzaUlIeHFU9uEl6KqpoF3DNUEtcLW";

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check email
    if (email !== EDITOR_EMAIL) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // 2️⃣ Compare plain password with stored hash
    const isMatch = await bcrypt.compare(password, HASHED_PASSWORD);

    if (!isMatch) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    // 3️⃣ Generate JWT
    const token = jwt.sign(
      { email, role: "editor" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // 4️⃣ Success response
    res.status(200).json({
      msg: "Login successful",
      token
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};
