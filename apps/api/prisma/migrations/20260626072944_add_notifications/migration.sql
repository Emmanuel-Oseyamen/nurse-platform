/*
  Warnings:

  - You are about to drop the column `specialties` on the `NurseProfile` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "NurseProfile" DROP COLUMN "specialties";

-- CreateTable
CREATE TABLE "Specialty" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NurseSpecialty" (
    "nurseProfileId" TEXT NOT NULL,
    "specialtyId" TEXT NOT NULL,

    CONSTRAINT "NurseSpecialty_pkey" PRIMARY KEY ("nurseProfileId","specialtyId")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "read" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialty_name_key" ON "Specialty"("name");

-- AddForeignKey
ALTER TABLE "NurseSpecialty" ADD CONSTRAINT "NurseSpecialty_nurseProfileId_fkey" FOREIGN KEY ("nurseProfileId") REFERENCES "NurseProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NurseSpecialty" ADD CONSTRAINT "NurseSpecialty_specialtyId_fkey" FOREIGN KEY ("specialtyId") REFERENCES "Specialty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
