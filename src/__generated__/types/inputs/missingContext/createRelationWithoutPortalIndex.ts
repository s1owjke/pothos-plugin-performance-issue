import { builder } from "src/builder";

import { MissingContextCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextCreateRelationWithoutPortalIndex = builder.inputRef<any>("MissingContextCreateRelationWithoutPortalIndex").implement({
  fields: (t) => ({
    connect: t.field({ type: MissingContextWhereUnique }),
    create: t.field({ type: MissingContextCreateWithoutPortalIndex }),
  }),
});
