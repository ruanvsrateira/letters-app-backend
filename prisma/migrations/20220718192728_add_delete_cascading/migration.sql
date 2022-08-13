-- DropForeignKey
ALTER TABLE "Letter" DROP CONSTRAINT "Letter_directoryFatherId_fkey";

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_directoryFatherId_fkey" FOREIGN KEY ("directoryFatherId") REFERENCES "Directory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
