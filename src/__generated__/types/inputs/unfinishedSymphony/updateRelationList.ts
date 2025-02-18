import { builder } from "src/builder";

import { UnfinishedSymphonyCreate } from "./create";
import { UnfinishedSymphonyWhereUnique } from "./whereUnique";

export const UnfinishedSymphonyUpdateRelationList = builder.inputRef<any>("UnfinishedSymphonyUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnfinishedSymphonyWhereUnique] }),
    set: t.field({ type: [UnfinishedSymphonyWhereUnique] }),
    disconnect: t.field({ type: [UnfinishedSymphonyWhereUnique] }),
    create: t.field({ type: [UnfinishedSymphonyCreate] }),
  }),
});
