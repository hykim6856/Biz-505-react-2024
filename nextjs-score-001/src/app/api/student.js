import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const selectAll = async () => {
  try {
    const result = await prisma.tbl_student.findMany();
    return result;
  } catch (error) {
    console.log(error);
  }
};
