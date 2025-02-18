import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("SuspiciousTimestampUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      set: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      disconnect: t.field({ type: [SuspiciousTimestampWhereUnique] }),
      create: t.field({ type: [SuspiciousTimestampCreateWithoutVortexReport] }),
    }),
  });
