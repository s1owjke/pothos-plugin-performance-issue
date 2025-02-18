import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDebuggingHistories } from "./createWithoutDebuggingHistories";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutDebuggingHistories = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutDebuggingHistories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutDebuggingHistories }),
    }),
  });
