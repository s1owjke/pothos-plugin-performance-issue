import { builder } from "src/builder";

import { DebuggingHistoryCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DebuggingHistoryUpdateWithoutGravityOverride } from "./updateWithoutGravityOverride";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryUpdateRelationWithoutGravityOverride = builder
  .inputRef<any>("DebuggingHistoryUpdateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DebuggingHistoryWhereUnique }),
      disconnect: t.field({ type: DebuggingHistoryWhereUnique }),
      create: t.field({ type: DebuggingHistoryCreateWithoutGravityOverride }),
      update: t.field({ type: DebuggingHistoryUpdateWithoutGravityOverride }),
    }),
  });
