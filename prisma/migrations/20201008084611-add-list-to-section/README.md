# Migration `20201008084611-add-list-to-section`

This migration has been generated by Hargoze at 10/8/2020, 10:46:11 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "Section" ADD COLUMN     "list" TEXT
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201008084356-add-section..20201008084611-add-list-to-section
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
@@ -97,5 +97,6 @@
   background String?
   ps String?
   ps_posititon Boolean? @default(true)
   ps_color String?
+  list String?
 }
```


