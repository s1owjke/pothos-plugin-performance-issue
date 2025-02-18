import { builder } from "src/builder";

import { TimeTravelLogCreate } from "./create";
import { TimeTravelLogUpdate } from "./update";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogUpdateRelation = builder.inputRef<any>("TimeTravelLogUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: TimeTravelLogWhereUnique }),
    disconnect: t.field({ type: TimeTravelLogWhereUnique }),
    create: t.field({ type: TimeTravelLogCreate }),
    update: t.field({ type: TimeTravelLogUpdate }),
  }),
});
