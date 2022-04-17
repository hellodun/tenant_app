-- CreateTable
CREATE TABLE "Tenant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "passport_id" INTEGER NOT NULL,
    "house_no" TEXT NOT NULL,
    "floor_no" INTEGER NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Floor" (
    "floor_no" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "house_count" INTEGER NOT NULL,

    CONSTRAINT "Floor_pkey" PRIMARY KEY ("floor_no")
);

-- CreateTable
CREATE TABLE "House" (
    "house_no" TEXT NOT NULL,
    "floor_no" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "rent" INTEGER NOT NULL,
    "tenant_id" INTEGER NOT NULL,

    CONSTRAINT "House_pkey" PRIMARY KEY ("house_no")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_email_key" ON "Tenant"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_phone_key" ON "Tenant"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_passport_id_key" ON "Tenant"("passport_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tenant_house_no_key" ON "Tenant"("house_no");

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_floor_no_fkey" FOREIGN KEY ("floor_no") REFERENCES "Floor"("floor_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_house_no_fkey" FOREIGN KEY ("house_no") REFERENCES "House"("house_no") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "House" ADD CONSTRAINT "House_floor_no_fkey" FOREIGN KEY ("floor_no") REFERENCES "Floor"("floor_no") ON DELETE RESTRICT ON UPDATE CASCADE;
