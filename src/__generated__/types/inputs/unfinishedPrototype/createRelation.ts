import { builder } from "src/builder";

import { UnfinishedPrototypeCreate } from "./create";
import { UnfinishedPrototypeWhereUnique } from "./whereUnique";

export const UnfinishedPrototypeCreateRelation = builder.inputRef<any>("UnfinishedPrototypeCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: UnfinishedPrototypeWhereUnique }),
    create: t.field({ type: UnfinishedPrototypeCreate }),
  }),
});
