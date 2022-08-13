/*
  Warnings:

  - You are about to drop the `Direcotory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Direcotory";

-- CreateTable
CREATE TABLE "Directory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Directory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Directory_name_key" ON "Directory"("name");
