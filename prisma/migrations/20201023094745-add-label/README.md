# Migration `20201023094745-add-label`

This migration has been generated by Hargoze at 10/23/2020, 11:47:45 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Label" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "english" TEXT NOT NULL,
    "french" TEXT NOT NULL
)

CREATE UNIQUE INDEX "Label.name_unique" ON "Label"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201023074123-change-header-schema..20201023094745-add-label
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
@@ -123,5 +123,12 @@
 model Suggestion {
   id    Int     @default(autoincrement()) @id
   comment String
+}
+
+model Label {
+  id    Int     @default(autoincrement()) @id
+  name String @unique
+  english String
+  french String
 }
```

