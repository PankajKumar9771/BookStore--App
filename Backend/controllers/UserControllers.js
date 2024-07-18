import User from "../Model/User.js";
import bycrpt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    console.log(fullname, email, password);
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPassword = await bycrpt.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPassword,
    });
    await createdUser.save();
    res.status(201).json({
      message: "user created successfully",
      user: {
        username: createdUser.fullname,
        id: createdUser._id,
        email: createdUser.email,
      },
    });
  } catch (error) {
    console.log("Error : " + error.message);
    res.status(500).json({ message: "Internal server errror" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    const isMatch = await bycrpt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    } else {
      res.status(200).json({
        message: "user login succesfully",
        user: {
          id: user._id,
          fullname: user.fullname,
          email: user.email,
        },
      });
    }
  } catch (error) {
    console.log("Error : " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
