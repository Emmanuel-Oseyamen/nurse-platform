-- CreateEnum
CREATE TYPE "NurseVerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- AlterTable
ALTER TABLE "NurseProfile" ADD COLUMN     "approvedAt" TIMESTAMP(3),
ADD COLUMN     "approvedBy" TEXT,
ADD COLUMN     "rejectionReason" TEXT,
ADD COLUMN     "verificationStatus" "NurseVerificationStatus" NOT NULL DEFAULT 'PENDING';
