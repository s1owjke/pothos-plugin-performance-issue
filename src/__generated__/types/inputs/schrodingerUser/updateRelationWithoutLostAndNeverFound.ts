import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutLostAndNeverFound } from "./createWithoutLostAndNeverFound";
import { SchrodingerUserUpdateWithoutLostAndNeverFound } from "./updateWithoutLostAndNeverFound";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationWithoutLostAndNeverFound = builder
  .inputRef<any>("SchrodingerUserUpdateRelationWithoutLostAndNeverFound")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: SchrodingerUserWhereUnique }),
      disconnect: t.field({ type: SchrodingerUserWhereUnique }),
      create: t.field({ type: SchrodingerUserCreateWithoutLostAndNeverFound }),
      update: t.field({ type: SchrodingerUserUpdateWithoutLostAndNeverFound }),
    }),
  });
