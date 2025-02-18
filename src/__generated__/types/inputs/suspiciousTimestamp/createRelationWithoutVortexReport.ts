import { builder } from "src/builder";

import { SuspiciousTimestampCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { SuspiciousTimestampWhereUnique } from "./whereUnique";

export const SuspiciousTimestampCreateRelationWithoutVortexReport = builder
  .inputRef<any>("SuspiciousTimestampCreateRelationWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SuspiciousTimestampWhereUnique }),
      create: t.field({ type: SuspiciousTimestampCreateWithoutVortexReport }),
    }),
  });
