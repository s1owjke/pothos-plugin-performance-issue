import { builder } from "src/builder";

import { UnfinishedSymphonyCreate } from "./create";
import { UnfinishedSymphonyWhereUnique } from "./whereUnique";

export const UnfinishedSymphonyCreateRelationList = builder.inputRef<any>("UnfinishedSymphonyCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnfinishedSymphonyWhereUnique] }),
    create: t.field({ type: [UnfinishedSymphonyCreate] }),
  }),
});
