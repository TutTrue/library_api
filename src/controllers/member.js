import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const getmembers = async (req, res) => {
  try {
    const members = await prisma.member.findMany();
    res.status(200).json({ members });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getmember = async (req, res) => {
  try {
    const { email } = req.body;
    const member = await prisma.member.findUnique({
      where: { email: email },
      include: {
        Author: true,
      },
    });
    console.log(member);
    if (member.Author != null) member.isAuthor = true;
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getmemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await prisma.member.findUnique({
      where: { id: Number(id) },
      include: {
        Author: true,
      },
    });
    console.log(member);
    if (!member) return res.status(404).json(null);
    if (member.Author != null) member.isAuthor = true;
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createmember = async (req, res) => {
  try {
    const { name, address, phone, email, password, isAuthor } = req.body;
    const member = await prisma.member.create({
      data: {
        name,
        address,
        phone,
        email,
        password,
      },
    });

    if (isAuthor === true) {
      await prisma.author.create({
        data: {
          memberId: member.id,
        },
      });
    }
    res.status(201).json({ member });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default { getmembers, getmember, createmember, getmemberById };
