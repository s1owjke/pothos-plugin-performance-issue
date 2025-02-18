import { builder } from "src/builder";

import { MissingContextCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("MissingContextCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: MissingContextWhereUnique }),
      create: t.field({ type: MissingContextCreateWithoutGravityOverride }),
    }),
  });
