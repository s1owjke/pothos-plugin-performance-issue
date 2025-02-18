import { builder } from "src/builder";

import { DebuggingHistoryCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryCreateRelationWithoutGravityOverride = builder
  .inputRef<any>("DebuggingHistoryCreateRelationWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: DebuggingHistoryWhereUnique }),
      create: t.field({ type: DebuggingHistoryCreateWithoutGravityOverride }),
    }),
  });
