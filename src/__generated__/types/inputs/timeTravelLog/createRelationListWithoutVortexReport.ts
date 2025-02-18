import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelationListWithoutVortexReport = builder
  .inputRef<any>("TimeTravelLogCreateRelationListWithoutVortexReport")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [TimeTravelLogWhereUnique] }),
      create: t.field({ type: [TimeTravelLogCreateWithoutVortexReport] }),
    }),
  });
