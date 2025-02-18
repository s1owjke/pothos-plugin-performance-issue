import { builder } from "src/builder";

import { UnnecessaryPermissionCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { UnnecessaryPermissionWhereUnique } from "./whereUnique";

export const UnnecessaryPermissionCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("UnnecessaryPermissionCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [UnnecessaryPermissionWhereUnique] }),
      create: t.field({ type: [UnnecessaryPermissionCreateWithoutHypotheticalRevenue] }),
    }),
  });
