import { builder } from "src/builder";

import { MissingContextCreate } from "./create";
import { MissingContextUpdate } from "./update";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelation = builder.inputRef<any>("MissingContextUpdateRelation").implement({
  fields: (t) => ({
    connect: t.field({ type: MissingContextWhereUnique }),
    disconnect: t.field({ type: MissingContextWhereUnique }),
    create: t.field({ type: MissingContextCreate }),
    update: t.field({ type: MissingContextUpdate }),
  }),
});
