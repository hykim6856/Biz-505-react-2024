import { PrismaClient } from "@prisma/client";
const DB = new PrismaClient();

const selectAll = async () => {
  try {
    const notice = await DB.tbl_notice.findMany();
    await DB.$disconnect();
    return notice;
  } catch (err) {}
};

const createNotice = async (data) => {
  console.log(data);
  await DB.tbl_notice.create({ data: data });
};
export { createNotice, selectAll };
