-- AlterTable
ALTER TABLE "User" ADD COLUMN     "energy" INTEGER NOT NULL DEFAULT 1000,
ADD COLUMN     "totalScore" INTEGER NOT NULL DEFAULT 0;