import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDebuggingHistories } from "./createWithoutDebuggingHistories";
import { GravityOverrideUpdateWithoutDebuggingHistories } from "./updateWithoutDebuggingHistories";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutDebuggingHistories = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutDebuggingHistories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutDebuggingHistories }),
      update: t.field({ type: GravityOverrideUpdateWithoutDebuggingHistories }),
    }),
  });
