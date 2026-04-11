/*
  Warnings:

  - Made the column `coverImageUrl` on table `blogs` required. This step will fail if there are existing NULL values in that column.
  - Made the column `metaTitle` on table `blogs` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "blogs" ALTER COLUMN "coverImageUrl" SET NOT NULL,
ALTER COLUMN "metaTitle" SET NOT NULL;
