import { builder } from "src/builder";

import { MissingContextCreate } from "./create";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextCreateRelation = builder.inputRef<any>("MissingContextCreateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: MissingContextWhereUnique }),
    create: t.field({ type: MissingContextCreate }),
  }),
});
