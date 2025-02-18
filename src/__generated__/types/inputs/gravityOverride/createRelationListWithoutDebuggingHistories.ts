import { builder } from "src/builder";

import { GravityOverrideCreateWithoutDebuggingHistories } from "./createWithoutDebuggingHistories";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutDebuggingHistories = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutDebuggingHistories")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutDebuggingHistories] }),
    }),
  });
