import { builder } from "src/builder";

import { DebuggingHistoryCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryUpdateRelationListWithoutGravityOverride = builder
  .inputRef<any>("DebuggingHistoryUpdateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DebuggingHistoryWhereUnique] }),
      set: t.field({ type: [DebuggingHistoryWhereUnique] }),
      disconnect: t.field({ type: [DebuggingHistoryWhereUnique] }),
      create: t.field({ type: [DebuggingHistoryCreateWithoutGravityOverride] }),
    }),
  });
