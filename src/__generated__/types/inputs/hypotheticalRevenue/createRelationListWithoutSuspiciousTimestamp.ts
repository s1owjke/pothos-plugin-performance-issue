import { builder } from "src/builder";

import { HypotheticalRevenueCreateWithoutSuspiciousTimestamp } from "./createWithoutSuspiciousTimestamp";
import { HypotheticalRevenueWhereUnique } from "./whereUnique";

export const HypotheticalRevenueCreateRelationListWithoutSuspiciousTimestamp = builder
  .inputRef<any>("HypotheticalRevenueCreateRelationListWithoutSuspiciousTimestamp")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [HypotheticalRevenueWhereUnique] }),
      create: t.field({ type: [HypotheticalRevenueCreateWithoutSuspiciousTimestamp] }),
    }),
  });
