/*
  Warnings:

  - Changed the type of `rent` on the `Floor` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `house_no` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Floor" DROP COLUMN "rent",
ADD COLUMN     "rent" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" ADD COLUMN     "house_no" TEXT NOT NULL;
