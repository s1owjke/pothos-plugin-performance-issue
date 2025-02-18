import { builder } from "src/builder";

import { TimeTravelLogCreate } from "./create";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelationList = builder.inputRef<any>("TimeTravelLogUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [TimeTravelLogWhereUnique] }),
    set: t.field({ type: [TimeTravelLogWhereUnique] }),
    disconnect: t.field({ type: [TimeTravelLogWhereUnique] }),
    create: t.field({ type: [TimeTravelLogCreate] }),
  }),
});
