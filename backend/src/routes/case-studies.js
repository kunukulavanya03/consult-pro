const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const caseStudies = await prisma.caseStudy.findMany();
  res.send(caseStudies);
});

router.post('/', async (req, res) => {
  const { title, description, client, result } = req.body;
  const caseStudy = await prisma.caseStudy.create({ data: { title, description, client, result } });
  res.send(caseStudy);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { title, description, client, result } = req.body;
  const caseStudy = await prisma.caseStudy.update({ where: { id }, data: { title, description, client, result } });
  res.send(caseStudy);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.caseStudy.delete({ where: { id } });
  res.send({ message: 'Case study deleted successfully' });
});

module.exports = router;