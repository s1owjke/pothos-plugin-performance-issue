import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { SuspiciousTimestampUpdateWithoutHypotheticalRevenue } from "./updateWithoutHypotheticalRevenue";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("SuspiciousTimestampUpdateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SuspiciousTimestampWhereUnique }),
      disconnect: t.field({ type: SuspiciousTimestampWhereUnique }),
      create: t.field({ type: SuspiciousTimestampCreateWithoutHypotheticalRevenue }),
      update: t.field({ type: SuspiciousTimestampUpdateWithoutHypotheticalRevenue }),
    }),
  });
