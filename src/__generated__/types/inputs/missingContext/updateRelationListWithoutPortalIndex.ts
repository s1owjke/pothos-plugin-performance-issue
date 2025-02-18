import { builder } from "src/builder";

import { MissingContextCreateWithoutPortalIndex } from "./createWithoutPortalIndex";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelationListWithoutPortalIndex = builder
  .inputRef<any>("MissingContextUpdateRelationListWithoutPortalIndex")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [MissingContextWhereUnique] }),
      set: t.field({ type: [MissingContextWhereUnique] }),
      disconnect: t.field({ type: [MissingContextWhereUnique] }),
      create: t.field({ type: [MissingContextCreateWithoutPortalIndex] }),
    }),
  });
