import { builder } from "src/builder";

import { PendingDisasterCreate } from "./create";
import { PendingDisasterWhereUnique } from "./whereUnique";

export const PendingDisasterCreateRelationList = builder.inputRef<any>("PendingDisasterCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [PendingDisasterWhereUnique] }),
    create: t.field({ type: [PendingDisasterCreate] }),
  }),
});
