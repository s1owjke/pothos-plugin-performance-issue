import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationListWithoutVortexReport = builder
  .inputRef<any>("TimeTravelLogUpdateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      set: t.field({ type: [TimeTravelLogWhereUnique] }),
      disconnect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutVortexReport] }),
    }),
  });
