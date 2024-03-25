"use server";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const PRODUCT = prisma.tbl_product;

export const findByProduct = async (key) => {
  const result = await PRODUCT.findMany({
    where: {
      p_name: {
        contains: key,
      },
    },
  });
  //   console.log("검색결과", result);
  return result;
};
