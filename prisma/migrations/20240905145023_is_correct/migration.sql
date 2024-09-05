/*
  Warnings:

  - You are about to drop the column `statment` on the `Question` table. All the data in the column will be lost.
  - Added the required column `statement` to the `Question` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Question" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "statement" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "year" INTEGER NOT NULL
);
INSERT INTO "new_Question" ("category", "difficulty", "id", "image", "type", "year") SELECT "category", "difficulty", "id", "image", "type", "year" FROM "Question";
DROP TABLE "Question";
ALTER TABLE "new_Question" RENAME TO "Question";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
