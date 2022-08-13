-- AlterTable
ALTER TABLE "Letter" ALTER COLUMN "directoryFatherId" DROP DEFAULT;
DROP SEQUENCE "Letter_directoryFatherId_seq";

-- AddForeignKey
ALTER TABLE "Letter" ADD CONSTRAINT "Letter_directoryFatherId_fkey" FOREIGN KEY ("directoryFatherId") REFERENCES "Directory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
