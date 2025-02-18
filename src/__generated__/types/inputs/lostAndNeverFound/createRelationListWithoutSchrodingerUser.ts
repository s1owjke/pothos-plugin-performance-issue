import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("LostAndNeverFoundCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [LostAndNeverFoundWhereUnique] }),
      create: t.field({ type: [LostAndNeverFoundCreateWithoutSchrodingerUser] }),
    }),
  });
