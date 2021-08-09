-- CreateEnum
CREATE TYPE "Types" AS ENUM ('FOOD', 'LODGING', 'TRANSPORTATION', 'OTHER');

-- CreateEnum
CREATE TYPE "Statuses" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('USER', 'ADMIN');

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "user_uname" TEXT NOT NULL,
    "user_firstname" TEXT NOT NULL,
    "user_lastname" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_role" "Roles" NOT NULL DEFAULT E'USER',

    PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "reimbursements" (
    "reimb_id" SERIAL NOT NULL,
    "reimb_amount" DECIMAL(65,30) NOT NULL,
    "reimb_submitted" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reimb_resolved" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reimb_description" TEXT NOT NULL,
    "reimb_author_id" INTEGER NOT NULL,
    "reimb_solver_id" INTEGER NOT NULL,
    "reimb_status" "Statuses" NOT NULL DEFAULT E'PENDING',
    "reimb_type" "Types" NOT NULL DEFAULT E'OTHER',

    PRIMARY KEY ("reimb_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users.user_uname_unique" ON "users"("user_uname");

-- CreateIndex
CREATE UNIQUE INDEX "users.user_email_unique" ON "users"("user_email");

-- AddForeignKey
ALTER TABLE "reimbursements" ADD FOREIGN KEY ("reimb_author_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reimbursements" ADD FOREIGN KEY ("reimb_solver_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
