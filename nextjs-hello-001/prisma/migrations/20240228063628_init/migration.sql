/*
  Warnings:

  - You are about to drop the column `m_data` on the `tbl_notice` table. All the data in the column will be lost.
  - Added the required column `m_date` to the `tbl_notice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `m_flag` to the `tbl_notice` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tbl_notice` DROP COLUMN `m_data`,
    ADD COLUMN `m_date` VARCHAR(191) NOT NULL,
    ADD COLUMN `m_flag` VARCHAR(191) NOT NULL;
