/*
  Warnings:

  - Changed the type of `zipCode` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "zipCode",
ADD COLUMN     "zipCode" INTEGER NOT NULL;
