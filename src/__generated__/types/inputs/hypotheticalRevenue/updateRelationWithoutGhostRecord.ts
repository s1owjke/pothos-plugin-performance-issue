import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutGhostRecord } from "./createWithoutGhostRecord";
import { HypotheticalRevenueUpdateWithoutGhostRecord } from "./updateWithoutGhostRecord";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutGhostRecord = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutGhostRecord")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutGhostRecord }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutGhostRecord }),
    }),
  });
