import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { HypotheticalRevenueUpdateWithoutSuspiciousTimestamp } from "./updateWithoutSuspiciousTimestamp";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueUpdateRelationWithoutSuspiciousTimestamp = builder
  .inputRef<any>("HypotheticalRevenueUpdateRelationWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      disconnect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutSuspiciousTimestamp }),
      update: t.field({ type: HypotheticalRevenueUpdateWithoutSuspiciousTimestamp }),
    }),
  });
