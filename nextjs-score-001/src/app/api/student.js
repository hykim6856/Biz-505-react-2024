"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const selectAll = async () => {
  try {
    const result = await prisma.tbl_student.findMany();
    // console.log("RESULT", result);
    prisma.$disconnect;
    return result;
  } catch (error) {
    console.log(error);
    prisma.$disconnect;
  }
};

// const student = { selectAll };
// export default student;
