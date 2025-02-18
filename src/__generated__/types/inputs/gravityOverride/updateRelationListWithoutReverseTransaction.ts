import { builder } from "src/builder";

import { GravityOverrideCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationListWithoutReverseTransaction = builder
  .inputRef<any>("GravityOverrideUpdateRelationListWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [GravityOverrideWhereUnique] }),
      set: t.field({ type: [GravityOverrideWhereUnique] }),
      disconnect: t.field({ type: [GravityOverrideWhereUnique] }),
      create: t.field({ type: [GravityOverrideCreateWithoutReverseTransaction] }),
    }),
  });
