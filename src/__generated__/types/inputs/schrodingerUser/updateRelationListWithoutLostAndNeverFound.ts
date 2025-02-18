import { builder } from "src/builder";

import { SchrodingerUserCreateWithoutLostAndNeverFound } from "./createWithoutLostAndNeverFound";
import { SchrodingerUserWhereUnique } from "./whereUnique";

export const SchrodingerUserUpdateRelationListWithoutLostAndNeverFound = builder
  .inputRef<any>("SchrodingerUserUpdateRelationListWithoutLostAndNeverFound")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [SchrodingerUserWhereUnique] }),
      set: t.field({ type: [SchrodingerUserWhereUnique] }),
      disconnect: t.field({ type: [SchrodingerUserWhereUnique] }),
      create: t.field({ type: [SchrodingerUserCreateWithoutLostAndNeverFound] }),
    }),
  });
