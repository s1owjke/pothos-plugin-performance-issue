import { builder } from "src/builder";

import { MissingContextCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("MissingContextUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [MissingContextWhereUnique] }),
      set: t.field({ type: [MissingContextWhereUnique] }),
      disconnect: t.field({ type: [MissingContextWhereUnique] }),
      create: t.field({ type: [MissingContextCreateWithoutGravityOverride] }),
    }),
  });
