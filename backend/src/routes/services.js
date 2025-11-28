const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const services = await prisma.service.findMany();
  res.send(services);
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;
  const service = await prisma.service.create({ data: { name, description } });
  res.send(service);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, description } = req.body;
  const service = await prisma.service.update({ where: { id }, data: { name, description } });
  res.send(service);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.service.delete({ where: { id } });
  res.send({ message: 'Service deleted successfully' });
});

module.exports = router;