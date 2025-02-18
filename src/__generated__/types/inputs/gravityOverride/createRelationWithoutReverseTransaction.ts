import { builder } from "src/builder";

import { GravityOverrideCreateWithoutReverseTransaction } from "./createWithoutReverseTransaction";
import { GravityOverrideWhereUnique } from "./whereUnique";

export const GravityOverrideCreateRelationWithoutReverseTransaction = builder
  .inputRef<any>("GravityOverrideCreateRelationWithoutReverseTransaction")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: GravityOverrideWhereUnique }),
      create: t.field({ type: GravityOverrideCreateWithoutReverseTransaction }),
    }),
  });
