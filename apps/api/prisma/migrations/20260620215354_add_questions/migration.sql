/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `questionId` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Question` table. All the data in the column will be lost.
  - Changed the type of `visibility` on the `Question` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Answer" DROP CONSTRAINT "Answer_questionId_fkey";

-- DropIndex
DROP INDEX "Answer_questionId_key";

-- AlterTable
ALTER TABLE "Answer" DROP COLUMN "createdAt",
DROP COLUMN "questionId";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "createdAt",
DROP COLUMN "status",
DROP COLUMN "updatedAt",
DROP COLUMN "visibility",
ADD COLUMN     "visibility" TEXT NOT NULL;
