import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBorrow = async (req, res) => {
  try {
    const { bookId, memberId } = req.body;
    const book = await prisma.book.findUnique({
      where: { id: Number(bookId) },
      include: { Borrowing: true },
    });
    if (book.Borrowing.length > 0) {
      return res.status(400).json({ error: "Book is not available" });
    }
    const borrow = await prisma.borrowing.create({
      data: {
        bookId: Number(bookId),
        memberId: Number(memberId),
        returnDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    });
    res.status(201).json(borrow);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export default { createBorrow };
