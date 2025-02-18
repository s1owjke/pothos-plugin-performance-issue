import { builder } from "src/builder";

import { BananaQueueCreate } from "./create";
import { BananaQueueUpdate } from "./update";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueUpdateRelation = builder.inputRef<any>("BananaQueueUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: BananaQueueWhereUnique }),
    disconnect: t.field({ type: BananaQueueWhereUnique }),
    create: t.field({ type: BananaQueueCreate }),
    update: t.field({ type: BananaQueueUpdate }),
  }),
});
