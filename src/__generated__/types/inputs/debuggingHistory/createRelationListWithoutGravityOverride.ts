import { builder } from "src/builder";

import { DebuggingHistoryCreateWithoutGravityOverride } from "./createWithoutGravityOverride";
import { DebuggingHistoryWhereUnique } from "./whereUnique";

export const DebuggingHistoryCreateRelationListWithoutGravityOverride = builder
  .inputRef<any>("DebuggingHistoryCreateRelationListWithoutGravityOverride")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [DebuggingHistoryWhereUnique] }),
      create: t.field({ type: [DebuggingHistoryCreateWithoutGravityOverride] }),
    }),
  });
