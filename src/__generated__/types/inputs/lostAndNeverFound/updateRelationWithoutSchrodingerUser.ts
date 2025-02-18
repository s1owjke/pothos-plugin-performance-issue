import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { LostAndNeverFoundUpdateWithoutSchrodingerUser } from "./updateWithoutSchrodingerUser";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundUpdateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("LostAndNeverFoundUpdateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: LostAndNeverFoundWhereUnique }),
      disconnect: t.field({ type: LostAndNeverFoundWhereUnique }),
      create: t.field({ type: LostAndNeverFoundCreateWithoutSchrodingerUser }),
      update: t.field({ type: LostAndNeverFoundUpdateWithoutSchrodingerUser }),
    }),
  });
