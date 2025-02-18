import { builder } from "src/builder";

import { UnfinishedSymphonyCreate } from "./create";
import { UnfinishedSymphonyWhereUnique } from "./whereUnique";

export const UnfinishedSymphonyCreateRelation = builder.inputRef<any>("UnfinishedSymphonyCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnfinishedSymphonyWhereUnique }),
    create: t.field({ type: UnfinishedSymphonyCreate }),
  }),
});
