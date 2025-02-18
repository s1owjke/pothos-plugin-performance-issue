import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { SuspiciousTimestampUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampUpdateRelationWithoutVortexReport = builder
  .inputRef<any>("SuspiciousTimestampUpdateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SuspiciousTimestampWhereUnique }),
      disconnect: t.field({ type: SuspiciousTimestampWhereUnique }),
      create: t.field({ type: SuspiciousTimestampCreateWithoutVortexReport }),
      update: t.field({ type: SuspiciousTimestampUpdateWithoutVortexReport }),
    }),
  });
