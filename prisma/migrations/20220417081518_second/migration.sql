-- AlterTable
CREATE SEQUENCE "floor_floor_no_seq";
ALTER TABLE "Floor" ALTER COLUMN "floor_no" SET DEFAULT nextval('floor_floor_no_seq');
ALTER SEQUENCE "floor_floor_no_seq" OWNED BY "Floor"."floor_no";
