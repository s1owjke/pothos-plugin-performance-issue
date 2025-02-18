import { builder } from "src/builder";

import { PendingDisasterCreate } from "./create";
import { PendingDisasterUpdate } from "./update";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelation = builder.inputRef<any>("PendingDisasterUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: PendingDisasterWhereUnique }),
    disconnect: t.field({ type: PendingDisasterWhereUnique }),
    create: t.field({ type: PendingDisasterCreate }),
    update: t.field({ type: PendingDisasterUpdate }),
  }),
});
