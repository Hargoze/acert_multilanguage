# Migration `20201009152416-add-argument-param`

This migration has been generated by Hargoze at 10/9/2020, 5:24:16 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Button" ADD COLUMN     "Arguments" TEXT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201009151540-change-type-to-str..20201009152416-add-argument-param
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
@@ -82,8 +82,9 @@
   type String @default("Link")
   href String? @default("#")
   file String?
   function String?
+  Arguments String?
 }
 model Section_Image {
   id    Int     @default(autoincrement()) @id
```


