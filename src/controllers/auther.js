import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAuthers = async (req, res) => {
  try {
    const authers = await prisma.auther.findMany();
    res.json(authers);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const createAuther = async (req, res) => {
  try {
    const { name, nationality } = req.body;
    const auther = await prisma.auther.create({
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

export default { getAuthers, createAuther };
