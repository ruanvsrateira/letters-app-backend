-- CreateTable
CREATE TABLE "Letter" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "letter" TEXT NOT NULL,

    CONSTRAINT "Letter_pkey" PRIMARY KEY ("id")
);
