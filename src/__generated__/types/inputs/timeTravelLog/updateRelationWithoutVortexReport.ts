import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TimeTravelLogUpdateWithoutVortexReport } from "./updateWithoutVortexReport";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationWithoutVortexReport = builder.inputRef<any>("TimeTravelLogUpdateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: TimeTravelLogWhereUnique }),
    disconnect: t.field({ type: TimeTravelLogWhereUnique }),
    create: t.field({ type: TimeTravelLogCreateWithoutVortexReport }),
    update: t.field({ type: TimeTravelLogUpdateWithoutVortexReport }),
  }),
});
