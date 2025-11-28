const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const teamMembers = await prisma.teamMember.findMany();
  res.send(teamMembers);
});

router.post('/', async (req, res) => {
  const { name, position, bio } = req.body;
  const teamMember = await prisma.teamMember.create({ data: { name, position, bio } });
  res.send(teamMember);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const { name, position, bio } = req.body;
  const teamMember = await prisma.teamMember.update({ where: { id }, data: { name, position, bio } });
  res.send(teamMember);
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await prisma.teamMember.delete({ where: { id } });
  res.send({ message: 'Team member deleted successfully' });
});

module.exports = router;