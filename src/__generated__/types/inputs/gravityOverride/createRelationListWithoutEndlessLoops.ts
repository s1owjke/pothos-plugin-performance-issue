import { builder } from "src/builder";

import { GravityOverrideCreateWithoutEndlessLoops } from "./createWithoutEndlessLoops";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationListWithoutEndlessLoops = builder
  .inputRef<any>("GravityOverrideCreateRelationListWithoutEndlessLoops")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutEndlessLoops] }),
    }),
  });
