const express = require('express');
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

app.use(express.json());

// routes
const serviceRoutes = require('./routes/services');
const caseStudyRoutes = require('./routes/case-studies');
const blogPostRoutes = require('./routes/blogs');
const teamMemberRoutes = require('./routes/team-members');
const inquiryRoutes = require('./routes/inquiries');
const userRoutes = require('./routes/users');

app.use('/api/services', serviceRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/blogs', blogPostRoutes);
app.use('/api/team-members', teamMemberRoutes);
app.use('/api/inquiries', inquiryRoutes);
app.use('/api/users', userRoutes);

// authentication middleware
app.use(async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send({ message: 'Access denied. No token provided.' });
  try {
    const decoded = jwt.verify(token, 'secretkey');
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ message: 'Invalid token.' });
  }
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));