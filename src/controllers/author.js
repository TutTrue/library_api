import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAuthors = async (req, res) => {
  try {
    const authers = await prisma.author.findMany();
    res.json(authers);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { name, nationality } = req.body;
    const auther = await prisma.author.create({
      data: {
        name,
        nationality,
      },
    });
    res.json(auther);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export default { getAuthors, createAuthor };
