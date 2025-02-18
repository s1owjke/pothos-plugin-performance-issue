import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationWithoutSuspiciousTimestamp = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: HypotheticalRevenueWhereUnique }),
      create: t.field({ type: HypotheticalRevenueCreateWithoutSuspiciousTimestamp }),
    }),
  });
