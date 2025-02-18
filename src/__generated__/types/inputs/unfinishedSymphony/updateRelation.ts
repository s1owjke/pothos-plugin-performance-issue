import { builder } from "src/builder";

import { UnfinishedSymphonyCreate } from "./create";
import { UnfinishedSymphonyUpdate } from "./update";
import { UnfinishedSymphonyWhereUnique } from "./whereUnique";

export const UnfinishedSymphonyUpdateRelation = builder.inputRef<any>("UnfinishedSymphonyUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnfinishedSymphonyWhereUnique }),
    disconnect: t.field({ type: UnfinishedSymphonyWhereUnique }),
    create: t.field({ type: UnfinishedSymphonyCreate }),
    update: t.field({ type: UnfinishedSymphonyUpdate }),
  }),
});
