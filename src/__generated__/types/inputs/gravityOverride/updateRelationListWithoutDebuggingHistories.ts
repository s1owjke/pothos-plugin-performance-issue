import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDebuggingHistories } from "./createWithoutDebuggingHistories";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutDebuggingHistories = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutDebuggingHistories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutDebuggingHistories] }),
    }),
  });
