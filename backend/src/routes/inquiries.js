const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const inquiries = await prisma.inquiry.findMany();
  res.send(inquiries);
});

router.post('/', async (req, res) => {
  const { name, email, message } = req.body;
  const inquiry = await prisma.inquiry.create({ data: { name, email, message } });
  res.send(inquiry);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { responded } = req.body;
  const inquiry = await prisma.inquiry.update({ where: { id }, data: { responded } });
  res.send(inquiry);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.inquiry.delete({ where: { id } });
  res.send({ message: 'Inquiry deleted successfully' });
});

module.exports = router;