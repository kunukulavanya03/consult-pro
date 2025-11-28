const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const blogPosts = await prisma.blogPost.findMany();
  res.send(blogPosts);
});

router.post('/', async (req, res) => {
  const { title, content, author } = req.body;
  const blogPost = await prisma.blogPost.create({ data: { title, content, author } });
  res.send(blogPost);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { title, content, author } = req.body;
  const blogPost = await prisma.blogPost.update({ where: { id }, data: { title, content, author } });
  res.send(blogPost);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.blogPost.delete({ where: { id } });
  res.send({ message: 'Blog post deleted successfully' });
});

module.exports = router;