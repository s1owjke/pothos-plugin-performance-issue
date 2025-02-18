import { builder } from "src/builder";

import { PendingDisasterCreate } from "./create";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterUpdateRelationList = builder.inputRef<any>("PendingDisasterUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [PendingDisasterWhereUnique] }),
    set: t.field({ type: [PendingDisasterWhereUnique] }),
    disconnect: t.field({ type: [PendingDisasterWhereUnique] }),
    create: t.field({ type: [PendingDisasterCreate] }),
  }),
});
