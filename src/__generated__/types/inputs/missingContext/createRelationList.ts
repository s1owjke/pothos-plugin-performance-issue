import { builder } from "src/builder";

import { MissingContextCreate } from "./create";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextCreateRelationList = builder.inputRef<any>("MissingContextCreateRelationList").implement({
  fields: (t) => ({
    connect: t.field({ type: [MissingContextWhereUnique] }),
    create: t.field({ type: [MissingContextCreate] }),
  }),
});
