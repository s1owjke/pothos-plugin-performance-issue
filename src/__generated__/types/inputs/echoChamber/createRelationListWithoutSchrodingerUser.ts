import { builder } from "src/builder";

import { EchoChamberCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberCreateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("EchoChamberCreateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EchoChamberWhereUnique] }),
      create: t.field({ type: [EchoChamberCreateWithoutSchrodingerUser] }),
    }),
  });
