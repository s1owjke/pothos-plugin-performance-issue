import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("SuspiciousTimestampUpdateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      set: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      disconnect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      create: t.field({ type: [SuspiciousTimestampCreateWithoutHypotheticalRevenue] }),
    }),
  });
