import { builder } from "src/builder";

import { TimeTravelLogCreateWithoutVortexReport } from "./createWithoutVortexReport";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelationWithoutVortexReport = builder.inputRef<any>("TimeTravelLogCreateRelationWithoutVortexReport").implement({
  fields: (t) => ({
    connect: t.field({ type: TimeTravelLogWhereUnique }),
    create: t.field({ type: TimeTravelLogCreateWithoutVortexReport }),
  }),
});
