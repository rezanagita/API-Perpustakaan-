const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, 'your_jwt_secret', { expiresIn: '1h' });
};

// REGISTER USER
const registerUser = async (req, res) => {
  const { username, password, role } = req.body;

  try {
    const userExists = await User.findOne({ username });

    if (userExists) {
      return res.status(400).json({ msg: 'Username already exists' });
    }

    const newUser = new User({
      username,
      password,
      role
    });

    await newUser.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({ msg: 'Invalid username or password' });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(404).json({ msg: 'Invalid username or password' });
    }

    const token = generateToken(user._id, user.role);

    res.json({ token, user });
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
};
