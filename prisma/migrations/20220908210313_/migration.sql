/*
  Warnings:

  - You are about to drop the `Client` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Freelancer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Work` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WorkStatus` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PaymantTypeEnum" AS ENUM ('CASH', 'CREDIT');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_statusCode_fkey";

-- DropTable
DROP TABLE "Client";

-- DropTable
DROP TABLE "Freelancer";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Work";

-- DropTable
DROP TABLE "WorkStatus";

-- DropEnum
DROP TYPE "WorkStatusCode";

-- CreateTable
CREATE TABLE "Customer" (
    "id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderMenuItem" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,
    "comments" TEXT NOT NULL,

    CONSTRAINT "OrderMenuItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuItem" (
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "menu_id" INTEGER NOT NULL,
    "order_menu_item_id" INTEGER NOT NULL,

    CONSTRAINT "MenuItem_pkey" PRIMARY KEY ("menu_id","order_menu_item_id")
);

-- CreateTable
CREATE TABLE "Order" (
    "id" SERIAL NOT NULL,
    "customer_id" INTEGER NOT NULL,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Billing" (
    "id" SERIAL NOT NULL,
    "order_id" INTEGER NOT NULL,
    "transactionAmount" INTEGER NOT NULL,
    "payment_type" "PaymantTypeEnum" NOT NULL,

    CONSTRAINT "Billing_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Billing_order_id_key" ON "Billing"("order_id");

-- AddForeignKey
ALTER TABLE "OrderMenuItem" ADD CONSTRAINT "OrderMenuItem_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_menu_id_fkey" FOREIGN KEY ("menu_id") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuItem" ADD CONSTRAINT "MenuItem_order_menu_item_id_fkey" FOREIGN KEY ("order_menu_item_id") REFERENCES "OrderMenuItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customer_id_fkey" FOREIGN KEY ("customer_id") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Billing" ADD CONSTRAINT "Billing_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
