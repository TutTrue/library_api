import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createReservation = async (req, res) => {
  try {
    const { bookId, memberId } = req.body;
    const book = await prisma.book.findUnique({
      where: { id: Number(bookId) },
      include: { reservations: true },
    });
    if (book.reservations.length > 0) {
      const reservationTest = book.reservations.find(
        (reservation) => reservation.memberId === Number(memberId)
      );
      if (reservationTest) {
        return res.status(400).json({ error: "Book is already reserved" });
      }
    }
    const reservation = await prisma.reservation.create({
      data: {
        bookId: Number(bookId),
        memberId: Number(memberId),
        date: new Date(Date.now()),
      },
    });
    res.status(201).json(reservation);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export default { createReservation };
