import { builder } from "src/builder";

import { LostAndNeverFoundCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { LostAndNeverFoundWhereUnique } from "./whereUnique";

export const LostAndNeverFoundCreateRelationWithoutSchrodingerUser = builder
  .inputRef<any>("LostAndNeverFoundCreateRelationWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: LostAndNeverFoundWhereUnique }),
      create: t.field({ type: LostAndNeverFoundCreateWithoutSchrodingerUser }),
    }),
  });
