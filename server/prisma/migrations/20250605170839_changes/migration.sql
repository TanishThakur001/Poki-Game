/*
  Warnings:

  - You are about to drop the column `attack` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `cardId` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `damage` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `hp` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Card` table. All the data in the column will be lost.
  - You are about to drop the column `weakness` on the `Card` table. All the data in the column will be lost.
  - Added the required column `masterCardId` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" DROP COLUMN "attack",
DROP COLUMN "cardId",
DROP COLUMN "damage",
DROP COLUMN "hp",
DROP COLUMN "imageUrl",
DROP COLUMN "name",
DROP COLUMN "type",
DROP COLUMN "weakness",
ADD COLUMN     "masterCardId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "MasterCard" (
    "id" SERIAL NOT NULL,
    "cardId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "hp" INTEGER NOT NULL,
    "attack" TEXT NOT NULL,
    "damage" INTEGER NOT NULL,
    "weakness" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterCard_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MasterCard_cardId_key" ON "MasterCard"("cardId");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_masterCardId_fkey" FOREIGN KEY ("masterCardId") REFERENCES "MasterCard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
