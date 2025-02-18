import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampCreateRelationListWithoutHypotheticalRevenue = builder
  .inputRef<any>("SuspiciousTimestampCreateRelationListWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      create: t.field({ type: [SuspiciousTimestampCreateWithoutHypotheticalRevenue] }),
    }),
  });
