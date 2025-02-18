import { builder } from "src/builder";

import { BananaQueueCreate } from "./create";
import { BananaQueueWhereUnique } from "./whereUnique";

export const BananaQueueCreateRelation = builder.inputRef<any>("BananaQueueCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: BananaQueueWhereUnique }),
    create: t.field({ type: BananaQueueCreate }),
  }),
});
