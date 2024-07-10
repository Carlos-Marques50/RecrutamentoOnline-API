/*
  Warnings:

  - You are about to drop the column `interviewType` on the `interview` table. All the data in the column will be lost.
  - You are about to drop the column `interviewee` on the `interview` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `interview` DROP COLUMN `interviewType`,
    DROP COLUMN `interviewee`;
