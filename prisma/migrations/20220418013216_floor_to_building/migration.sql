/*
  Warnings:

  - You are about to drop the column `floor_no` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the `Floor` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `building_id` to the `Tenant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Tenant" DROP CONSTRAINT "Tenant_floor_no_fkey";

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "floor_no",
ADD COLUMN     "building_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Floor";

-- CreateTable
CREATE TABLE "Building" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "house_count" INTEGER NOT NULL,
    "rent" INTEGER NOT NULL,

    CONSTRAINT "Building_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_building_id_fkey" FOREIGN KEY ("building_id") REFERENCES "Building"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
