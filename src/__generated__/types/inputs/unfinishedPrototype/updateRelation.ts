import { builder } from "src/builder";

import { UnfinishedPrototypeCreate } from "./create";
import { UnfinishedPrototypeUpdate } from "./update";
import { UnfinishedPrototypeWhereUnique } from "./whereUnique";

export const UnfinishedPrototypeUpdateRelation = builder.inputRef<any>("UnfinishedPrototypeUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnfinishedPrototypeWhereUnique }),
    disconnect: t.field({ type: UnfinishedPrototypeWhereUnique }),
    create: t.field({ type: UnfinishedPrototypeCreate }),
    update: t.field({ type: UnfinishedPrototypeUpdate }),
  }),
});
