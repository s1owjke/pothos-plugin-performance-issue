import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutHypotheticalRevenue } from "./createWithoutHypotheticalRevenue";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampCreateRelationWithoutHypotheticalRevenue = builder
  .inputRef<any>("SuspiciousTimestampCreateRelationWithoutHypotheticalRevenue")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SuspiciousTimestampWhereUnique }),
      create: t.field({ type: SuspiciousTimestampCreateWithoutHypotheticalRevenue }),
    }),
  });
