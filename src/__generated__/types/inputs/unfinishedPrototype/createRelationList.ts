import { builder } from "src/builder";

import { UnfinishedPrototypeCreate } from "./create";
import { UnfinishedPrototypeWhereUnique } from "./whereUnique";

export const UnfinishedPrototypeCreateRelationList = builder.inputRef<any>("UnfinishedPrototypeCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [UnfinishedPrototypeWhereUnique] }),
    create: t.field({ type: [UnfinishedPrototypeCreate] }),
  }),
});
