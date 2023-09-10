const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();
//  const session = require('express-session');

const User = require("./model/User");




const app = express();
const PORT = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;
const SECRET_KEY = process.env.SECRET_KEY;

app.use(cors());
app.use(express.json());

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 // useCreateIndex: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));






app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (user) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      res.status(200).json({ message: 'User registered successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
});
  






app.get('/register/:id', async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Retrieve the user from the database based on the ID
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the user as a JSON response
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });





/*
// Authentication
app.get('/auth', authenticate, (req, res) => {


})

*/


  
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ email: email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const isMatch = await user.comparePassword(password);
  
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
  
      const token = jwt.sign({ userId: user._id }, SECRET_KEY);
      res.status(200).json({ token: token });
    } catch (err) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });







/*
app.post('/login', (req, res) => {
    // Check the credentials and authenticate the user
    const { email, password } = req.body;
  
    // Perform the necessary authentication logic, e.g., validating the email and password
    // If the authentication is successful, set a session or generate an authentication token
    // and send it back to the client as a response
    const user = User.find(user => user.email === email);

    // If the user is not found or the password is incorrect, return an error
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    if (email === 'example@example.com' && password === 'password') {
      // Assuming you are using sessions
     // req.session.userId = '123456'; // Set the user ID in the session
      req.session.userId = user.id;

        

        res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
});
  */

  
  // Logout route
  app.post('/logout', (req, res) => {
    // Destroy the session or clear the authentication token
   /*
    req.session.destroy((error) => {
      if (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      } else {
        res.status(200).json({ message: 'Logout successful' });
      }
    });

*/

res.status(200).json({ message: 'Logout successful' });
      
  });











  const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }
  
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token' });
      }
      req.userId = decoded.userId;
      next();
    });
  };
  
  app.get('/dashboard', authMiddleware, (req, res) => {
    // Access the authenticated user's ID from req.userId
    res.status(200).json({ message: 'Dashboard Page' });
  });











app.listen(PORT, () => console.log(`Server running on port ${PORT}`));