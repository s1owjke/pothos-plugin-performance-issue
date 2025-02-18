import { builder } from "src/builder";

import { UnfinishedPrototypeCreate } from "./create";
import { UnfinishedPrototypeWhereUnique } from "./whereUnique";

export const UnfinishedPrototypeUpdateRelationList = builder.inputRef<any>("UnfinishedPrototypeUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnfinishedPrototypeWhereUnique] }),
    set: t.field({ type: [UnfinishedPrototypeWhereUnique] }),
    disconnect: t.field({ type: [UnfinishedPrototypeWhereUnique] }),
    create: t.field({ type: [UnfinishedPrototypeCreate] }),
  }),
});
