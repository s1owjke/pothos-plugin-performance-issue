import { builder } from "src/builder";

import { BananaQueueCreate } from "./create";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueUpdateRelationList = builder.inputRef<any>("BananaQueueUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [BananaQueueWhereUnique] }),
    set: t.field({ type: [BananaQueueWhereUnique] }),
    disconnect: t.field({ type: [BananaQueueWhereUnique] }),
    create: t.field({ type: [BananaQueueCreate] }),
  }),
});
