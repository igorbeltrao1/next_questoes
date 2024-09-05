/*
  Warnings:

  - You are about to drop the column `correct` on the `Alternative` table. All the data in the column will be lost.
  - Added the required column `isCorrect` to the `Alternative` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Alternative" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "questionId" TEXT NOT NULL,
    CONSTRAINT "Alternative_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Alternative" ("id", "questionId", "text") SELECT "id", "questionId", "text" FROM "Alternative";
DROP TABLE "Alternative";
ALTER TABLE "new_Alternative" RENAME TO "Alternative";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
