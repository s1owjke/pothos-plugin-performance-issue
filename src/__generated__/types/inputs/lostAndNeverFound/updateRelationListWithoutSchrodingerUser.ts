import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("LostAndNeverFoundUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      set: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      disconnect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      create: t.field({ type: [LostAndNeverFoundCreateWithoutSchrodingerUser] }),
    }),
  });
