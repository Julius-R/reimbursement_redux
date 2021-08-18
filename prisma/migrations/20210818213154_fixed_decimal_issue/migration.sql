/*
  Warnings:

  - You are about to alter the column `reimb_amount` on the `reimbursements` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.

*/
-- AlterTable
ALTER TABLE "reimbursements" ALTER COLUMN "reimb_amount" SET DATA TYPE INTEGER;
