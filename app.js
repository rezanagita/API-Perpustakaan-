const express = require('express');
const connectDB = require('./config/db');

const categoryRoutes = require('./routes/categoryRoutes');
const publisherRoutes = require('./routes/publisherRoutes');
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');
const studentRoutes = require('./routes/studentRoutes');
const loanRoutes = require('./routes/loanRoutes');
const returnRoutes = require('./routes/returnRoutes');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/categories', categoryRoutes);
app.use('/publishers', publisherRoutes);
app.use('/books', bookRoutes);
app.use('/users', userRoutes);
app.use('/students', studentRoutes); 
app.use('/loans', loanRoutes);
app.use('/returns', returnRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
