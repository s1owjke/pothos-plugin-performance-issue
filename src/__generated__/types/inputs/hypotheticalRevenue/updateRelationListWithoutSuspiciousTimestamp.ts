import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationListWithoutSuspiciousTimestamp = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationListWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      set: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      disconnect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutSuspiciousTimestamp] }),
    }),
  });
