import { builder } from "src/builder";

import { MissingContextCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { MissingContextUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { MissingContextWhereUnique } from "./whereUnique";

export const MissingContextUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("MissingContextUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: MissingContextWhereUnique }),
      disconnect: t.field({ type: MissingContextWhereUnique }),
      create: t.field({ type: MissingContextCreateWithoutGravityOverride }),
      update: t.field({ type: MissingContextUpdateWithoutGravityOverride }),
    }),
  });
