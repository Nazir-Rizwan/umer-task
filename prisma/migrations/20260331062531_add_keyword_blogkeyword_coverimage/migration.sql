/*
  Warnings:

  - You are about to drop the column `excerpt` on the `blogs` table. All the data in the column will be lost.
  - You are about to drop the `blog_categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "blog_categories" DROP CONSTRAINT "blog_categories_blogId_fkey";

-- DropForeignKey
ALTER TABLE "blog_categories" DROP CONSTRAINT "blog_categories_categoryId_fkey";

-- AlterTable
ALTER TABLE "blogs" DROP COLUMN "excerpt";

-- DropTable
DROP TABLE "blog_categories";

-- DropTable
DROP TABLE "categories";

-- CreateTable
CREATE TABLE "keywords" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "keywords_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "blog_keywords" (
    "blogId" INTEGER NOT NULL,
    "keywordId" INTEGER NOT NULL,

    CONSTRAINT "blog_keywords_pkey" PRIMARY KEY ("blogId","keywordId")
);

-- CreateIndex
CREATE UNIQUE INDEX "keywords_name_key" ON "keywords"("name");

-- AddForeignKey
ALTER TABLE "blog_keywords" ADD CONSTRAINT "blog_keywords_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blogs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "blog_keywords" ADD CONSTRAINT "blog_keywords_keywordId_fkey" FOREIGN KEY ("keywordId") REFERENCES "keywords"("id") ON DELETE CASCADE ON UPDATE CASCADE;
