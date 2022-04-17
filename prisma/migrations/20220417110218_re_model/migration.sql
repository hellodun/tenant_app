/*
  Warnings:

  - You are about to drop the column `house_no` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the `House` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `rent` to the `Floor` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "House" DROP CONSTRAINT "House_floor_no_fkey";

-- DropForeignKey
ALTER TABLE "Tenant" DROP CONSTRAINT "Tenant_house_no_fkey";

-- DropIndex
DROP INDEX "Tenant_house_no_key";

-- AlterTable
ALTER TABLE "Floor" ADD COLUMN     "rent" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "house_no";

-- DropTable
DROP TABLE "House";
