import { builder } from "src/builder";

import { MissingContextCreate } from "./create";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelationList = builder.inputRef<any>("MissingContextUpdateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [MissingContextWhereUnique] }),
    set: t.field({ type: [MissingContextWhereUnique] }),
    disconnect: t.field({ type: [MissingContextWhereUnique] }),
    create: t.field({ type: [MissingContextCreate] }),
  }),
});
