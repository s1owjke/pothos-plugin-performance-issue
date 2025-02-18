import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { UnnecessaryPermissionUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("UnnecessaryPermissionUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: UnnecessaryPermissionWhereUnique }),
      disconnect: t.field({ type: UnnecessaryPermissionWhereUnique }),
      create: t.field({ type: UnnecessaryPermissionCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: UnnecessaryPermissionUpdateWithoutHypotheticalRevenue }),
    }),
  });
