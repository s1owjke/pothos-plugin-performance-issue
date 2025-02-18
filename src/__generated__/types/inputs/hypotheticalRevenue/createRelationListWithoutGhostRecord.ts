import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutGhostRecord = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutGhostRecord] }),
    }),
  });
