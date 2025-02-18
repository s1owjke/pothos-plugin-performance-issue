import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("UnnecessaryPermissionUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      set: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      disconnect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      create: t.field({ type: [UnnecessaryPermissionCreateWithoutHypotheticalRevenue] }),
    }),
  });
