import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAuthors = async (req, res) => {
  try {
    const authors = await prisma.author.findMany({
      include: { books: true },
    });
    res.json(authors);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createAuthor = async (req, res) => {
  try {
    const { name, nationality } = req.body;
    const author = await prisma.author.create({
      data: {
        name,
        nationality,
      },
    });
    res.json(author);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export default { getAuthors, createAuthor };
