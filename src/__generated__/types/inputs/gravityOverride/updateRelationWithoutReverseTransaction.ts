import { builder } from "src/builder";

import { GravityOverrideCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { GravityOverrideUpdateWithoutReverseTransaction } from "./updateWithoutReverseTransaction";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideUpdateRelationWithoutReverseTransaction = builder
  .inputRef<any>("GravityOverrideUpdateRelationWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      disconnect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutReverseTransaction }),
      update: t.field({ type: GravityOverrideUpdateWithoutReverseTransaction }),
    }),
  });
