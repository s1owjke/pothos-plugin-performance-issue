import { builder } from "src/builder";

import { MissingContextCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("MissingContextCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [MissingContextWhereUnique] }),
      create: t.field({ type: [MissingContextCreateWithoutGravityOverride] }),
    }),
  });
