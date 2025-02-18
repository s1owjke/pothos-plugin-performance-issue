import { builder } from "src/builder";

import { BananaQueueCreate } from "./create";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueCreateRelationList = builder.inputRef<any>("BananaQueueCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [BananaQueueWhereUnique] }),
    create: t.field({ type: [BananaQueueCreate] }),
  }),
});
