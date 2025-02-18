import { builder } from "src/builder";

import { EchoChamberCreateWithoutSchrodingerUser } from "./createWithoutSchrodingerUser";
import { EchoChamberWhereUnique } from "./whereUnique";

export const EchoChamberUpdateRelationListWithoutSchrodingerUser = builder
  .inputRef<any>("EchoChamberUpdateRelationListWithoutSchrodingerUser")
  .implement({
    fields: (t) => ({
      connect: t.field({ type: [EchoChamberWhereUnique] }),
      set: t.field({ type: [EchoChamberWhereUnique] }),
      disconnect: t.field({ type: [EchoChamberWhereUnique] }),
      create: t.field({ type: [EchoChamberCreateWithoutSchrodingerUser] }),
    }),
  });
