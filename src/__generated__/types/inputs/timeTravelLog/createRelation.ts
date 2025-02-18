import { builder } from "src/builder";

import { TimeTravelLogCreate } from "./create";
import { TimeTravelLogWhereUnique } from "./whereUnique";

export const TimeTravelLogCreateRelation = builder.inputRef<any>("TimeTravelLogCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: TimeTravelLogWhereUnique }),
    create: t.field({ type: TimeTravelLogCreate }),
  }),
});
