import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutLostAndNeverFound } from "./createWithoutLostAndNeverFound";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserCreateRelationWithoutLostAndNeverFound = builder
  .inputRef<any>("SchrodingerUserCreateRelationWithoutLostAndNeverFound")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutLostAndNeverFound }),
    }),
  });
