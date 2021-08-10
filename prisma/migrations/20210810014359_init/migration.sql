-- AlterTable
ALTER TABLE "reimbursements" ALTER COLUMN "reimb_resolved" DROP NOT NULL,
ALTER COLUMN "reimb_resolved" DROP DEFAULT;
