# Migration `20201023074123-change-header-schema`

This migration has been generated by Hargoze at 10/23/2020, 9:41:23 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Link" ADD COLUMN     "description" TEXT;
ALTER TABLE "Link" ADD COLUMN     "icon" TEXT

PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Picture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "link" TEXT NOT NULL DEFAULT 'learn more',
    "href" TEXT NOT NULL DEFAULT '#'
);
INSERT INTO "new_Picture" ("id", "image", "description", "link", "href") SELECT "id", "image", "description", "link", "href" FROM "Picture";
DROP TABLE "Picture";
ALTER TABLE "new_Picture" RENAME TO "Picture";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201021135333-add-suggestions..20201023074123-change-header-schema
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -18,17 +18,19 @@
 model Link {
   id    Int     @default(autoincrement()) @id
   status String @default("READY")
   name String
+  description String ?
+  icon String ?
   href String @default("#")
   header Header[] @relation(references: [id])
 }
 model Picture {
   id    Int     @default(autoincrement()) @id
   image String
   description String
-  link String
+  link String @default("learn more")
   href String @default("#")
   header Header[] @relation(references: [id])
 }
```


