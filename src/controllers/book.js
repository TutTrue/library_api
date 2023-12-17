import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getBooks = async (req, res) => {
  try {
    const books = await prisma.book.findMany();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await prisma.book.findUnique({
      where: { id: Number(id) },
      include: { author: true },
    });
    res.status(200).json({ book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, authorId, description } = req.body;
    const book = await prisma.book.create({
      data: {
        title,
        description,
        publicationYear: new Date().getFullYear(),
        Author: {
          connect: {
            id: Number(authorId),
          },
        },
      },
    });
    res.status(201).json({ book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBooksByAuthor = async (req, res) => {
  try {
    const { authorId } = req.params;
    const books = await prisma.book.findMany({
      where: { authorId: Number(authorId) },
    });
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getBooks, getBook, createBook, getBooksByAuthor };
